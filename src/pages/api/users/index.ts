import { NextApiRequest, NextApiResponse } from "next";

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    users: [
      {
        name: "John Smith",
        age: 32,
        email: "john.smith@example.com",
      },
      {
        name: "Sarah Johnson",
        age: 26,
        email: "sarah.johnson@example.com",
      },
      {
        name: "David Lee",
        age: 41,
        email: "david.lee@example.com",
      },
      {
        name: "Emily Wang",
        age: 28,
        email: "emily.wang@example.com",
      },
      {
        name: "Michael Chen",
        age: 35,
        email: "michael.chen@example.com",
      },
      {
        name: "Jessica Davis",
        age: 29,
        email: "jessica.davis@example.com",
      },
      {
        name: "William Brown",
        age: 45,
        email: "william.brown@example.com",
      },
      {
        name: "Amanda Rodriguez",
        age: 31,
        email: "amanda.rodriguez@example.com",
      },
      {
        name: "Daniel Hernandez",
        age: 37,
        email: "daniel.hernandez@example.com",
      },
      {
        name: "Jennifer Taylor",
        age: 24,
        email: "jennifer.taylor@example.com",
      },
    ],
  });
}
