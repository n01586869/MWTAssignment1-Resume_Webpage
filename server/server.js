const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app
    .get('/getEdu', (req, res) => {
        res.json([
            {
                school: "Humber College",
                program: "Computer Programming",
                type: "Diploma",
                startDate: 2023,
                graduationDate: 2024,
                city: "Etobicoke",
                province: "ON"
            }
        ])
    })

    .get('/getExp', (req, res) => {
        res.json([
            {
                company: "CBC",
                jobTitle: "Software Developer",
                responsibilities: [
                    "Developed and maintained software applications using Java and Python.",
                    "Collaborated with cross-functional teams to gather requirements and design solutions.",
                    "Conducted code reviews and implemented best coding practices."
                ],
                startDate: "July 2013",
                endDate: "Februrary 2015"
            },
            {
                company: "Apple",
                jobTitle: "Customer Service Representative",
                responsibilities: [
                    "Resolved customer issues and escalated problems to appropriate departments.",
                    "Maintained accurate records of customer interactions and transactions.",
                    "Provided product knowledge and information to enhance customer experience."
                ],
                startDate: "Februrary 2015",
                endDate: "December 2015"
            },
            {
                company: "Google",
                jobTitle: "Lead Graphic Designer",
                responsibilities: [
                    "Created visually appealing designs for marketing materials, websites, and branding.",
                    "Collaborated with clients and stakeholders to understand design requirements.",
                    "Used design software such as Adobe Creative Suite to produce high-quality graphics."
                ],
                startDate: "January 2016",
                endDate: "June 2023"
            }
        ])
    })

    .get('/getOverview', (req, res) => {
        res.json({
            overview: "Dynamic and results-driven professional with over 7 years of experience in software development. Proven expertise in designing and implementing robust, scalable solutions for diverse business needs. Adept at collaborating with cross-functional teams to deliver high-quality software on time and within budget. Strong analytical and problem-solving skills with a commitment to continuous learning and staying abreast of industry trends. Known for excellent communication and interpersonal skills, fostering productive working relationships at all organizational levels. Seeking opportunities to contribute technical proficiency and leadership in a challenging software development role."
        })
    })

    .get('/getSkills', (req, res) => {
        res.json([
            "Proficient in Java and Python",
            "Agile methodologies",
            "Code review and optimization",
            "Strong analytical skills",
            "Innovative problem solver",
            "Committed to staying updated on industry trends",
            "Excellent communication and presentation abilities"
        ])
    })

    .get('/getInfo', (req, res) => {
        res.json({
            name: "Mark Bedross",
            postalCode: "N5B 2M7",
            phone: "3334445678",
        })
    })


app.listen(8000, () => console.log("listening on port 8000"))