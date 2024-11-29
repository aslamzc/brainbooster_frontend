"use client";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "@/utils/axios";
import Link from "next/link";
import Loading from "@/app/loading";

const EmailVerify = () => {
    const { id, hash } = useParams();
    const searchParams = useSearchParams();
    const expires = searchParams.get('expires');
    const signature = searchParams.get('signature');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("Email Verified Successfully!");

    useEffect(() => {
        getInitialData();
    }, []);

    const getInitialData = async () => {
        try {
            const res: any = await axios.get(`/email/verify/${id}/${hash}/`, { params: { expires, signature } });
            setSuccess(true);
            setLoading(false);
            if (res?.error) setMessage(res?.error);
        } catch (error) {
            console.error(error);
            setSuccess(false);
            setLoading(false);
        }
    }

    return (
        <>
            {loading
                ?
                <Loading />
                :
                <div className="flex items-center justify-center h-screen">
                    {success
                        ?
                        <div className="text-center">
                            <h1 className="h1 font-semibold">{message}</h1>
                            <p className="mt-4">
                                Please click <Link href="/signin" legacyBehavior><a className="font-semibold">here</a></Link> to login.
                            </p>
                        </div>
                        :
                        <div className="mt-12 text-center">
                            <h1 className="h1 font-semibold">Email Verification Failed!</h1>
                        </div>
                    }
                </div>
            }
        </>
    );
};

export default EmailVerify;
