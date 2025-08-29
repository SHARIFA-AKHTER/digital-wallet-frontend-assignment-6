/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate, Link } from "react-router-dom";
import { useLoginMutation } from "@/features/auth/auth.api";
import { toast } from "sonner";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { LoginReq, LoginRes } from "@/features/auth/types";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export function LoginForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  const form = useForm<LoginReq>({
    defaultValues: {
      email: "sr0589071@gmail.com",
      password: "123456",
    },
  });

  // const onSubmit: SubmitHandler<LoginReq> = async (data) => {
  //   try {
  //     const res: LoginRes = await login(data).unwrap();

  //     if (res.success) {
  //       // Save token & user info
  //       localStorage.setItem(
  //         "authUser",
  //         JSON.stringify({
  //           token: res.data.accessToken,
  //           refreshToken: res.data.refreshToken,
  //           user: res.data.user,
  //         })
  //       );

  //       toast.success("✅ Logged in successfully");

  //       // Role-based redirect
  //       const role = res.data.user.role;
  //       if (role === "USER") navigate("/dashboard/user");
  //       else if (role === "AGENT") navigate("/dashboard/agent");
  //       else if (role === "ADMIN") navigate("/dashboard/admin");
  //     }
  //   } catch (err: any) {
  //     if (err?.data?.message === "password does not match") {
  //       toast.error("❌ Invalid Credentials");
  //     } else if (err?.data?.message === "User is not verified") {
  //       toast.error("⚠️ Your account is not verified");
  //       navigate("/verify", { state: data.email });
  //     } else {
  //       toast.error("❌ Login failed. Try again.");
  //     }
  //   }
  // };

  const onSubmit: SubmitHandler<LoginReq> = async (data) => {
  try {
    const res: LoginRes = await login(data).unwrap();

    if (res.success) {
      
      localStorage.setItem(
        "authUser",
        JSON.stringify({
          accessToken: res.data.accessToken,
          refreshToken: res.data.refreshToken,
          user: res.data.user,
        })
      );

      toast.success("✅ Logged in successfully");

      // Role-based redirect
      const role = res.data.user.role;
      if (role === "USER") navigate("/dashboard/user");
      else if (role === "AGENT") navigate("/dashboard/agent");
      else if (role === "ADMIN") navigate("/dashboard/admin");
    }
  } catch (err: any) {
    toast.error(err?.data?.message || "❌ Login failed. Try again.");
  }
};

  return (
    <div
      className={cn(
        "max-w-md mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 space-y-8",
        className
      )}
      {...props}
    >
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Login to Your Account
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Enter your email and password to continue
        </p>
      </div>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="john@example.com"
                    {...field}
                    value={field.value || ""}
                    className="bg-gray-50 dark:bg-gray-800"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="******"
                    {...field}
                    value={field.value || ""}
                    className="bg-gray-50 dark:bg-gray-800"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            Login
          </Button>
        </form>
      </Form>

      {/* Divider */}
      <div className="relative text-center text-sm text-gray-400 dark:text-gray-500 my-4">
        <span className="px-2 bg-white dark:bg-gray-900">Or continue with</span>
        <div className="absolute left-0 right-0 top-1/2 border-t border-gray-200 dark:border-gray-700" />
      </div>

      {/* Google Login */}
      <Button
        onClick={() =>
          window.open(`${import.meta.env.VITE_API_URL}/auth/google`, "_self")
        }
        variant="outline"
        className="w-full flex items-center justify-center gap-2 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        <img
          src="https://i.ibb.co.com/TxJFFjsC/degital-1.jpg"
          alt="Google"
          className="w-5 h-5"
        />
        Login with Google
      </Button>

      {/* Register link */}
      <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
        Don&apos;t have an account?{" "}
        <Link
          to="/register"
          className="underline text-indigo-600 dark:text-indigo-400"
        >
          Register
        </Link>
      </p>
    </div>
  );
}
