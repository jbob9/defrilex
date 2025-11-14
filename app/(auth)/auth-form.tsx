import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { LinkedinIcon } from "lucide-react";
import Link from "next/link";

export function AuthForm({
  className,
  action,
  ...props
}: React.ComponentProps<"form"> & {
  action: "login" | "register";
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-center gap-1 text-center">
        <p className="text-muted-foreground text-sm text-balance">
          {action === "login" ? "Welcome back" : "Welcome to Defrilex"}
        </p>
        <h1 className="text-2xl font-bold capitalize text-black">
          {action} account
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <Button variant="outline" type="button">
          <svg
            role="img"
            viewBox="0 0 24 24"
            className="fill-blue-700"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Facebook</title>
            <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
          </svg>
          Facebook
        </Button>
        <Button variant="outline" type="button">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Google</title>
            <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
          </svg>
          Google
        </Button>
        <Button
          variant="outline"
          type="button"
          className="col-span-full md:col-span-1"
        >
          <LinkedinIcon className="text-blue-500 fill-blue-500" />
          Linkedin
        </Button>
      </div>

      <FieldSeparator>Or continue with</FieldSeparator>
      <form className={cn("flex flex-col gap-6", className)} {...props}>
        <FieldGroup>
          {action === "register" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Field>
                <FieldLabel htmlFor="firstname">Firstname</FieldLabel>
                <Input id="firstname" type="text" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="lastname">Lastname</FieldLabel>
                <Input id="lastname" type="text" required />
              </Field>
            </div>
          ) : null}
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </Field>
          <div
            className={cn("grid grid-cols-1", {
              "md:grid-cols-2 gap-3": action === "register",
            })}
          >
            <Field>
              <div className="flex items-center">
                <FieldLabel htmlFor="password">Password</FieldLabel>
              </div>
              <Input id="password" type="password" required />
            </Field>
            {action === "register" ? (
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="confirm_password">
                    Confirm Password
                  </FieldLabel>
                </div>
                <Input id="confirm_password" type="password" required />
              </Field>
            ) : null}
          </div>
          {action === "login" ? (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember-me" />
                <Label htmlFor="remember-me">Remenber me</Label>
              </div>
              <a
                href="#"
                className="ml-auto text-sm underline-offset-4 hover:underline text-[hsl(226,100%,33%)]"
              >
                Forgot password?
              </a>
            </div>
          ) : (
            <div className="py-2">
              <div className="flex items-center gap-2">
                <Checkbox id="consent" />
                <Label
                  htmlFor="consent"
                  className="whitespace-nowrap flex-wrap"
                >
                  I agree with{" "}
                  <span className="text-[hsl(226,100%,33%)]">
                    Privacy Policy
                  </span>,
                  <span className="text-[hsl(226,100%,33%)]">
                    Terms of Service
                  </span>,<span className="text-[hsl(226,100%,33%)]">Bid Policy</span>
                </Label>
              </div>
            </div>
          )}
          <Field>
            <Button type="submit">
              {action === "login" ? "Login Account" : "Register Account"}
            </Button>
          </Field>
          <Field>
            <FieldDescription className="text-center">
              {action === "login" ? (
                <>
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/register"
                    className="underline underline-offset-4"
                  >
                    Sign up
                  </Link>
                </>
              ) : (
                <>
                  Already have an account?
                  <Link
                    href="/login"
                    className="underline underline-offset-4 text-[hsl(226,100%,33%)]"
                  >
                    Login Now
                  </Link>
                </>
              )}
            </FieldDescription>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}
