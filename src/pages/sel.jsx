import React, { Component } from "react";

class StudentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      branch: "",
      year: "",
      students: [],
      searchPin: "",
      error: ""
    };

    this.handleBranchChange = this.handleBranchChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleFetchStudents = this.handleFetchStudents.bind(this);
  }

  handleBranchChange(e) {
    this.setState({ branch: e.target.value, searchPin: "", error: "" });
  }

  handleYearChange(e) {
    this.setState({ year: e.target.value, searchPin: "", error: "" });
  }

  handleSearchChange(e) {
    this.setState({ searchPin: e.target.value, error: "" });
  }

  async handleFetchStudents() {
    const { branch, year, searchPin } = this.state;

    // Search by PIN if provided
    if (searchPin.trim()) {
      const pinRegex = /^\d{5}-(cm|ec)-\d{3}$/i;
      if (!pinRegex.test(searchPin)) {
        this.setState({
          error: "Invalid PIN format! Use 23635-cm-002",
          students: []
        });
        return;
      }

      try {
        const response = await fetch(
          `http://localhost:5000/students?pin=${encodeURIComponent(searchPin.trim())}`
        );
        const data = await response.json();

        if (data.length === 0) {
          this.setState({ error: "No student found", students: [] });
        } else {
          this.setState({ students: data, error: "" });
        }
      } catch (err) {
        console.error(err);
        this.setState({ error: "Error searching student", students: [] });
      }

      return;
    }

    // If PIN is not given, search by Branch + Year
    if (!branch || !year) {
      this.setState({
        error: "Please select both branch and year or enter a valid PIN.",
        students: []
      });
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/students?branch=${encodeURIComponent(branch)}&year=${encodeURIComponent(year)}`
      );
      const data = await response.json();
      this.setState({ students: data, error: "" });
    } catch (err) {
      console.error(err);
      this.setState({ error: "Error fetching students", students: [] });
    }
  }

  render() {
    const { branch, year, students, searchPin, error } = this.state;

    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h2>Student Certificate Portal</h2>

        {/* Search bar */}
        <div style={{ textAlign: "right", marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="Enter PIN (e.g. 23635-cm-002)"
            value={searchPin}
            onChange={this.handleSearchChange}
            style={{ padding: "5px" }}
          />
        </div>

        {/* Branch + Year Selection */}
        <div
          style={{
            backgroundColor: "#add8e6",
            padding: "15px",
            borderRadius: "8px"
          }}
        >
          <label>
            Branch:{" "}
            <select value={branch} onChange={this.handleBranchChange}>
              <option value="">Select Branch</option>
              <option value="CME">CME</option>
              <option value="ECE">ECE</option>
            </select>
          </label>

          <label style={{ marginLeft: "20px" }}>
            Year:{" "}
            <select value={year} onChange={this.handleYearChange}>
              <option value="">Select Year</option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
            </select>
          </label>

          <button onClick={this.handleFetchStudents} style={{ marginLeft: "20px" }}>
            Fetch Students
          </button>
        </div>

        {/* Error message */}
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

        {/* Students List */}
        <div style={{ marginTop: "20px" }}>
          {students.map((stu, index) => (
            <div
              key={index}
              style={{
                padding: "8px 12px",
                margin: "4px 0",
                backgroundColor: "#f2f2f2",
                borderRadius: "6px"
              }}
            >
              {stu.pin} | {stu.name} | {stu.clgCode} | {stu.institutionName} | {stu.branch} | {stu.year}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default StudentPage;
