import React from "react";
import styled from "styled-components";
import StudentInfo from "./student/StudentInfo";
import SubjectInfo from "./student/SubjectInfo";
import Faculty from "./faculty/Faculty";

/* ===== STYLES ===== */

const Container = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 30px 20px;
  font-family: Arial, sans-serif;
`;

const Header = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 22px;
  margin-bottom: 8px;
`;

const Section = styled.div`
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 8px;
  background: #fff;
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: bold;
`;

/* ===== COMPONENT ===== */

export default function Welcome() {
  return (
    <Container>
      <Header>
        <Title>
          School Dashboard -
          <span style={{ color: "red" }}>
            UseContext page selected value to faculty Compnent
          </span>
        </Title>
      </Header>

      <Section>
        <SectionTitle>Students</SectionTitle>
        <StudentInfo />
      </Section>

      <Section>
        <SectionTitle>Subjects</SectionTitle>
        <SubjectInfo />
      </Section>

      <Section>
        <SectionTitle>Faculty</SectionTitle>
        <Faculty />
      </Section>
    </Container>
  );
}
