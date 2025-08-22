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
  //   console.log("Form submit data:", data);

  //   try {
  //     const res: LoginRes = await login(data).unwrap();

  //     if (res.success) {
  //       // ✅ Token & user info save
  //       localStorage.setItem(
  //         "authUser",
  //         JSON.stringify({ token: res.token.accessToken, user: res.user.user })
  //       );

  //       toast.success("Logged in successfully");

  //       // ✅ Role-based redirect
  //       const role = res.user.role;
  //       if (role === "USER") navigate("/dashboard/user");
  //       else if (role === "AGENT") navigate("/dashboard/agent");
  //       else if (role === "ADMIN") navigate("/dashboard/admin");
  //     }
  //   } catch (err: any) {
  //     console.log("Login error:", err);

  //     if (err?.data?.message === "password does not match") {
  //       toast.error("Invalid Credentials");
  //     } else if (err?.data?.message === "User is not verified") {
  //       toast.error("Your Account is not verified");
  //       navigate("/verify", { state: data.email });
  //     } else {
  //       toast.error("Login failed. Try again.");
  //     }
  //   }
  // };

  const onSubmit: SubmitHandler<LoginReq> = async (data) => {
  console.log("Form submit data:", data);

  try {
    const res: LoginRes = await login(data).unwrap();
 console.log("Login response:", res); 
    if (res.success) {
      // ✅ Token & user info save
      localStorage.setItem(
        "authUser",
        JSON.stringify({ token: res.data.accessToken, user: res.data.user })
      );

      toast.success("Logged in successfully");

      // ✅ Role-based redirect
      const role = res.data.user.role;
         console.log("User role:", role);
      if (role === "USER") navigate("/dashboard/user");
      else if (role === "AGENT") navigate("/dashboard/agent");
      else if (role === "ADMIN") navigate("/dashboard/admin");
    }
  } catch (err: any) {
    console.log("Login error:", err);

    if (err?.data?.message === "password does not match") {
      toast.error("Invalid Credentials");
    } else if (err?.data?.message === "User is not verified") {
      toast.error("Your Account is not verified");
      navigate("/verify", { state: data.email });
    } else {
      toast.error("Login failed. Try again.");
    }
  }
};


  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>

      <div className="grid gap-6">
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
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </Form>

        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>

        <Button
          onClick={() =>
            window.open(`${import.meta.env.VITE_API_URL}/auth/google`, "_self")
          }
          type="button"
          variant="outline"
          className="w-full cursor-pointer"
        >
          Login with Google
        </Button>
      </div>

      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link to="/register" replace className="underline underline-offset-4">
          Register
        </Link>
      </div>
    </div>
  );
}

// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { useNavigate, Link } from "react-router-dom";
// import { useLoginMutation } from "@/features/auth/auth.api";
// import { toast } from "sonner";
// import { useForm, type SubmitHandler } from "react-hook-form";
// import type { LoginReq, LoginRes } from "@/features/auth/types";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";

// export function LoginForm({
//   className,
//   ...props
// }: React.HTMLAttributes<HTMLDivElement>) {
//   const navigate = useNavigate();
//   const [login] = useLoginMutation();

//   // ✅ useForm usage fixed
//   const form = useForm<LoginReq>({
//     defaultValues: {
//       email: "sr0589071@gmail.com",
//       password: "123456",
//     },
//   });

//   // ✅ type-safe onSubmit
//   const onSubmit: SubmitHandler<LoginReq> = async (data) => {
//      console.log("Form submit data:", data);
//     try {
//       const res: LoginRes = await login(data).unwrap();

//       if (res.success) {
//         toast.success("Logged in successfully");
//         navigate("/dashboard/user");
//       }
//     } catch (err: any) {
//       console.log(err);

//       if (err?.data?.message === "password does not match") {
//         toast.error("Invalid Credentials");
//       }

//       if (err?.data?.message === "User is not verified") {
//         toast.error("Your Account is not verified");
//         navigate("/verify", { state: data.email });
//       }
//     }
//   };

//   return (
//     <div className={cn("flex flex-col gap-6", className)} {...props}>
//       <div className="flex flex-col items-center gap-2 text-center">
//         <h1 className="text-2xl font-bold">Login to your account</h1>
//         <p className="text-balance text-sm text-muted-foreground">
//           Enter your email below to login to your account
//         </p>
//       </div>

//       <div className="grid gap-6">
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Email</FormLabel>
//                   <FormControl>
//                     <Input
//                       placeholder="john@example.com"
//                       {...field}
//                       value={field.value || ""}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="password"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Password</FormLabel>
//                   <FormControl>
//                     <Input
//                       type="password"
//                       placeholder="******"
//                       {...field}
//                       value={field.value || ""}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <Button type="submit" className="w-full">
//               Login
//             </Button>
//           </form>
//         </Form>

//         <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
//           <span className="relative z-10 bg-background px-2 text-muted-foreground">
//             Or continue with
//           </span>
//         </div>

//         {/*//* Google Login */}
//         <Button
//           onClick={() =>
//             window.open(`${import.meta.env.VITE_API_URL}/auth/google`, "_self")
//           }
//           type="button"
//           variant="outline"
//           className="w-full cursor-pointer"
//         >
//           Login with Google
//         </Button>
//       </div>

//       <div className="text-center text-sm">
//         Don&apos;t have an account?{" "}
//         <Link to="/register" replace className="underline underline-offset-4">
//           Register
//         </Link>
//       </div>
//     </div>
//   );
// }
