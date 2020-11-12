import { adjectives, nouns } from "./words";
import nodemailer from "nodemailer";
import mg from "nodemailer-mailgun-transport"

import jwt from "jsonwebtoken";

export const generateSecret = () => {
    const randomNumber = Math.floor(Math.random() * adjectives.length);
    return `${adjectives[randomNumber]} ${nouns[randomNumber]}`
};

export const sendMail = (email) => {
    const auth = {
        auth: {
            api_key: process.env.MAILGUN_API_KEY,
            domain: process.env.MAILGUN_DOMAIN
        }
    }

    const client = nodemailer.createTransport(mg(auth));
    return client.sendMail(email, (err, info) => console.log('err==>',err, 'info==>',info));
};

export const sendSecretMail = (address, secret) => {
    console.log('sendSecretMail OK');
    console.log("address->",address,'secret=>',secret)
    const email = {
        from: "sangwon@prismagram.com",
        to: "jackoss@naver.com",
        subject: "Login Secret for prismagram🐤",
        html: `Hello! Your login secret is <b>${secret}</b>.<br/>Copy paste on the app/website to log in`
    }
    return sendMail(email)
}

export const generateToken = (id) => jwt.sign({id}, process.env.JWT_SECRET);