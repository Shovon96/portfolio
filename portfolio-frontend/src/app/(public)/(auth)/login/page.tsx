

import LoginForm from '@/components/Auth/LoginForm';
import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
    return (
        <div>
          
            <LoginForm></LoginForm>
            <Link href={"/register"} >Register</Link>
        </div>
    );
};

export default LoginPage;