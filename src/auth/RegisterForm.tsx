
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const registerSchema = z.object({
  name: z.string().min(2, "Name too short"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(11, "Invalid phone number"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.enum(["USER", "AGENT"], "Select a role"),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export function RegisterForm({ className, ...props }: React.ComponentProps<"form">) {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormValues) => {
    console.log("Register Data:", data);
    // Add toast or API call here
  };

  return (
    <form
      className={cn(
        "max-w-md mx-auto bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg space-y-6",
        className
      )}
      onSubmit={handleSubmit(onSubmit)}
      {...props}
    >
      {/* Heading */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Create an Account</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Fill in your details to register
        </p>
      </div>

      <div className="grid gap-4">
        <div className="grid gap-1">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" type="text" placeholder="John Doe" {...register("name")} className="bg-gray-50 dark:bg-gray-800" />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div className="grid gap-1">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" {...register("email")} className="bg-gray-50 dark:bg-gray-800" />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div className="grid gap-1">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" type="text" placeholder="01XXXXXXXXX" {...register("phone")} className="bg-gray-50 dark:bg-gray-800" />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
        </div>

        <div className="grid gap-1">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="Password" {...register("password")} className="bg-gray-50 dark:bg-gray-800" />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        <div className="grid gap-1">
          <Label htmlFor="role">Role</Label>
          <select id="role" {...register("role")} className="w-full border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800">
            <option value="USER">User</option>
            <option value="AGENT">Agent</option>
          </select>
          {errors.role && <p className="text-red-500 text-sm">{errors.role.message}</p>}
        </div>

        <Button type="submit" className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white">
          Register
        </Button>
      </div>

      <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
        Already have an account?{" "}
        <a href="/login" className="underline text-indigo-600 dark:text-indigo-400 hover:text-indigo-700">
          Login
        </a>
      </p>
    </form>
  );
}
