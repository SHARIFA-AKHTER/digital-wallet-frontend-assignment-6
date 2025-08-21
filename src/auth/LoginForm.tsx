import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function LoginForm({ className, ...props }: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      {/* Heading */}
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to Your Account</h1>
        <p className="text-sm text-muted-foreground">
          Enter your email and password to access your wallet
        </p>
      </div>

      {/* Email & Password */}
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <a href="#" className="text-sm underline-offset-4 hover:underline">
              Forgot password?
            </a>
          </div>
          <Input id="password" type="password" required />
        </div>

        <Button type="submit" className="w-full">
          Login
        </Button>

        {/* Divider */}
        <div className="relative text-center text-sm text-muted-foreground before:absolute before:inset-0 before:top-1/2 before:border-t after:relative after:px-2 after:bg-background after:text-muted-foreground after:inline-block z-10">
          Or continue with
        </div>

        {/* Social Login */}
        <Button variant="outline" className="w-full flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
            <path
              d="M12 .297c-6.63 0-12 5.373-12 12 ... (GitHub SVG path)"
              fill="currentColor"
            />
          </svg>
          Login with Google
        </Button>
      </div>

      {/* Signup Link */}
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <a href="#" className="underline underline-offset-4 font-medium hover:text-primary">
          Sign up
        </a>
      </div>
    </form>
  );
}

