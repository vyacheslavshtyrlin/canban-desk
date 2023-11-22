import { useEffect } from "react";
import { useNavigate } from "react-router";
import useAuth from "@/shared/hooks/useAuth";
import { userStore } from "@/entities/index";

import { Card, Form, Input, Button, FormItem } from "@/shared/ui/index";
import { auth } from "@/shared/api/auth";
import { Routes as r } from "@/shared/config";

function Register() {
  const nav = useNavigate();
  const { useUserStrore } = userStore;

  const [setUser, loading, setLoading] = useUserStrore((state) => [
    state.setUser,
    state.loading,
    state.setLoading,
  ]);

  const { checkAuth } = useAuth();

  useEffect(() => {
    checkAuth();
  }, []);

  const handleAuth = (data: {
    email: string;
    password: string;
    name: string;
  }) => {
    setLoading(true);
    auth
      .signIn(data.email, data.password, data.name)
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
      <Card title="Регистрация">
        <Form
          extraAction={
            <Button
              variant='secondary'
              type="button"
              onClick={() => nav(r.login.path)}
            >
              Войти
            </Button>
          }
          submitText="Регистрация"
          isLoading={loading}
          onSubmit={(data: any) => handleAuth(data)}
        >
          <FormItem
            defaultValue=""
            rules={{ required: "Заполните поле" }}
            name="email"
            render={({ field }) => (
              <Input
                value={field.value}
                name={field.name}
                onChange={field.onChange}
                label="E-mail"
              />
            )}
          />
          <FormItem
            defaultValue=""
            rules={{ required: "Заполните поле" }}
            name="name"
            render={({ field }) => (
              <Input
                value={field.value}
                name={field.name}
                onChange={field.onChange}
                label="Имя"
              />
            )}
          />
          <FormItem
            defaultValue=""
            rules={{ required: "Заполните поле" }}
            name="password"
            render={({ field }) => (
              <Input
                value={field.value}
                name={field.name}
                onChange={field.onChange}
                label="Пароль"
              />
            )}
          />
        </Form>
      </Card>
    </div>
  );
}

export default Register;
