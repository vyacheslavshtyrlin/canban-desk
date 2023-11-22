import { useEffect } from "react";
import { useNavigate } from "react-router";
import useAuth from "@/shared/hooks/useAuth";
import { useUserStrore } from "@/entities/index";

import { Card, Form, Input, Button, FormItem } from "@/shared/ui/index";
import { auth } from "@/shared/api/auth";
import { Routes as r } from "@/shared/config";
import { useForm } from "react-hook-form";

export const Login = () => {

  const nav = useNavigate();
  const { checkAuth } = useAuth();

  const [setUser, loading, setLoading] = useUserStrore((state) => [
    state.setUser,
    state.loading,
    state.setLoading,
  ]);

  useEffect(() => {
    checkAuth();
  }, []);

  const handleAuth = (data: { email: string; password: string }) => {
    setLoading(true);
    auth
      .logIn(data.email, data.password)
      .then((user: any) => {
        setUser(user);
        nav(r.base.path);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <Card size="normal" title="Вход">
        <Form
          extraAction={
            <Button variant="secondary" onClick={() => nav(r.register.path)}>
              Регистрация
            </Button>
          }
          submitText="Войти"
          isLoading={loading}
          onSubmit={(data: any) => handleAuth(data)}
        >
          <FormItem
            defaultValue=""
            rules={{ required: "Заполните поле" }}
            name="login.email"
            render={({ field }) => <Input {...field} label="E-mail" />}
          />
          <FormItem
            defaultValue=""
            rules={{ required: "Заполните поле" }}
            name="login.password"
            render={({ field }) => <Input {...field} label="Пароль" />}
          />
        </Form>
      </Card>
    </div>
  );
};

export default Login;
