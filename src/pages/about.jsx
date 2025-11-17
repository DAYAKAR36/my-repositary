import React from "react";

function About() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>About Our College</h1>

        <p style={styles.text}>
          Established in <b>2017</b>, our college is dedicated to academic
          excellence, innovation, and holistic development. We offer a dynamic
          learning environment where students can explore their full potential.
        </p>

        <p style={styles.text}>
          Our campus is completely <b>ragging-free</b>, ensuring a safe and
          friendly environment for all students.
        </p>

        <h2 style={styles.subTitle}>🌟 Vision</h2>
        <p style={styles.text}>
          To impart quality Technical Education in semi-urban areas of northern
          Andhra Pradesh and to produce quality technician manpower to meet
          technological needs for economic development of the State and become
          an outstanding Polytechnic, an ultimate destination for learning
          multi-technical job skills.
        </p>

        <h2 style={styles.subTitle}>🎯 Mission</h2>
        <ul style={styles.list}>
          <li>
            Offer demand-driven diploma programs to cater to the needs of local
            industries and other public/private sector agencies.
          </li>
          <li>
            Provide the best academic environment for students to realize their
            full potential and acquire strong technical knowledge and job skills.
          </li>
          <li>
            Infuse human values of integrity and social responsibility, enabling
            students to contribute to national development with their technical
            knowledge.
          </li>
        </ul>

      </div>
    </div>
  );
}

const styles = {
  container: {
    background: "#f9f9f9",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    padding: "40px 20px",
  },
  card: {
    background: "#fff",
    width: "85%",
    maxWidth: "900px",
    borderRadius: "12px",
    padding: "30px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    borderTop: "6px solid red",
  },
  title: {
    textAlign: "center",
    color: "red",
    marginBottom: "20px",
  },
  subTitle: {
    color: "red",
    marginTop: "25px",
    marginBottom: "10px",
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.6",
  },
  list: {
    paddingLeft: "20px",
    fontSize: "16px",
    lineHeight: "1.7",
  },
};

export default About;
