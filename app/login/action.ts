"use server";

import { SignJWT, importJWK } from "jose";

export default async function login(prevState, formData) {
    const email = formData.get("email");
    const password = formData.get("password");

    if (email !== "mike@test.com" && password !== "1234") {
        return { message: "Login Fail" };
    }

    const secretJWK = {
        kty: "oct",
        k: process.env.JOSE_SECRET,
    };

    const secretKey = await importJWK(secretJWK, "HS256");
    const token = await new SignJWT({ email })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("1h")
        .sign(secretKey);
    console.log(token);
}