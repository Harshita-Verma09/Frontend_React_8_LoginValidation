import React, { useState, useEffect } from 'react';

const Signup = () => {
    const [isLogin, setLogin] = useState(() => {
        return localStorage.getItem("isLogin") === "false" ? false : true;
    });

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        localStorage.setItem("isLogin", isLogin);
    }, [isLogin]);

    const handleInput = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        let newErrors = {};

        if (!form.email) {
            newErrors.email = "Email is required.";
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email)) {
            newErrors.email = "Enter a valid email address.";
        }

        if (!form.password) {
            newErrors.password = "Password is required.";
        } else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(form.password)) {
            newErrors.password = "Password must be at least 8 characters, include uppercase, lowercase, a number, and a special character.";
        }

        if (!isLogin) {
            if (!form.name) {
                newErrors.name = "Name is required.";
            }

            if (!form.confirmPassword) {
                newErrors.confirmPassword = "Confirm Password is required.";
            } else if (form.password !== form.confirmPassword) {
                newErrors.confirmPassword = "Passwords do not match.";
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        if (!isLogin) {
            const userData = {
                name: form.name,
                email: form.email,
                password: form.password,
            };
            localStorage.setItem("user", JSON.stringify(userData));
            alert("Successful SignUp");
            setLogin(true);
        } else {
            const storedUser = JSON.parse(localStorage.getItem("user"));
            if (!storedUser || storedUser.email !== form.email || storedUser.password !== form.password) {
                setErrors({ login: "Invalid email or password." });
                return;
            }
            alert("Login Successfully");
        }
    };

    return (
        <div className="bg-blue-900 flex justify-center items-center min-h-screen px-4 ">
            <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
                <h1 className="text-xl font-bold text-center mb-4">{isLogin ? "Login" : "Sign Up"}</h1>
                {!isLogin && (
                    <>
                        <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                        <input type="text" name="name" id="name" placeholder="Enter your name" className="w-full p-2 border border-gray-400 rounded-md mb-2" value={form.name} onChange={handleInput} />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </>
                )}
                <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                <input type="email" name="email" id="email" placeholder="Enter email address" className="w-full p-2 border border-gray-400 rounded-md mb-2" value={form.email} onChange={handleInput} />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                <label htmlFor="password" className="block mb-1 font-medium">Password</label>
                <input type="password" name="password" id="password" placeholder="Enter your password" className="w-full p-2 border border-gray-400 rounded-md mb-2" value={form.password} onChange={handleInput} />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                {!isLogin && (
                    <>
                        <label htmlFor="confirmPassword" className="block mb-1 font-medium">Confirm Password</label>
                        <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Enter confirm password" className="w-full p-2 border border-gray-400 rounded-md mb-2" value={form.confirmPassword} onChange={handleInput} />
                        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                    </>
                )}
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition">{isLogin ? "Login" : "Sign Up"}</button>
                {errors.login && <p className="text-red-500 text-sm text-center mt-2">{errors.login}</p>}
                <p className="text-center mt-4">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                    <span className="text-blue-600 cursor-pointer" onClick={() => setLogin(!isLogin)}>
                        {isLogin ? " Sign Up" : " Login"}
                    </span>
                </p>
            </form>
        </div>
    );
};

export default Signup;
