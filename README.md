# Software Engineering Challenge

Welcome to the Software Engineering Challenge repository!

This project is part of a challenge to demonstrate understanding and proficiency in software engineering concepts. It encompasses various aspects of software development, including analysis, design, implementation, and testing.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [License](#license)
6. [Contact](#contact)
7. [Disclaimer](#disclaimer)

### Introduction

A [spreadsheet](https://docs.google.com/spreadsheets/d/1NigEbtxeUV1ZPDXv5YvXYzdo1pvwNOdTFg-FY3V-Ofw/edit#gid=0) of students was provided, containing their absence count and grades for 3 assessments.

The challenge is to calculate the average of the 3 assessments. If the average grade is:\
m < 5 - Failing Grade\
5 <= m < 7 - Final Exam\
m >= 7 - Passed

If the number of absences exceeds 25% of the total number of classes, the student will have the status "Failed due to Absence," regardless of the average. If the status is "Final Exam," it is necessary to calculate the "Final Approval Grade" (naf) for each student according to the following formula:\
5 <= (m + naf) / 2

If the student's situation is different from "Final Exam," fill in the "Final Approval Grade" field with 0.

Round the result to the nearest integer (increase) if necessary. Use log lines to track the activities of the application.

### Features

* Requirement Analysis: Analyze and understand the given requirements thoroughly.
* Implementation: Code the solution adhering to best practices.
* Documentation: Document the codebase and provide necessary instructions for setup, configuration, and usage.

### Installation

To install and run this project locally, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/manuelaalecio/engenharia-de-software-desafio.git
```
2. Install dependencies:
```bash
npm install
```
3. Build the project:
```bash
npm run build
```

### Usage
In process

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Contact

For any inquiries or suggestions, feel free to contact the project maintainer:

- Discord: mallessio
- Email: [manuelaalecio.dev@gmail.com](mailto:manuelaalecio.dev@gmail.com)
- Instagram: [@manuela.alecio](https://www.instagram.com/manuela.alecio/)

### Disclaimer
This project is for educational purposes and may contain bugs or incomplete features. Use it at your own discretion.