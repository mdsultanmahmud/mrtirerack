import { NextResponse } from "next/server";
export default function middleware(req) {
    const pass = process.env.User_Pass
    const email = process.env.User_Email
    const userCookies = req.cookies.get("loggedIn");
    const user = userCookies ? JSON.parse(userCookies.value) : null 
    const url = req.url;
    if (url.includes("/dashboard/learn-how-to") && (user?.email != email || user?.password != pass)) {
        return NextResponse.redirect("http://localhost:3000/dashboard");
    }
    if (url.includes("/dashboard/best-tire") && (user?.email != email || user?.password != pass)) {
        return NextResponse.redirect("http://localhost:3000/dashboard");
    }
    if (url.includes("/dashboard/user-comments") && (user?.email != email || user?.password != pass)) {
        return NextResponse.redirect("http://localhost:3000/dashboard");
    }
    return NextResponse.next();
}
