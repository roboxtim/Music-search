import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../components/Ui/button/Button";
import { Input } from "../../components/Ui/input/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { changeUser } from "../../store/slices/userSlice";
import { RootState } from "../../store/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface LoginPageForm {
  username: string;
  userpassword: string;
}

const mockuser = {
  mail: 'test@mail.com',
  phone_number: '901234567',
  user_id: 1,
  name: 'Alex',
}

const loginFormSchema = yup.object({
  username: yup.string().required("Обязательно поле"),
  userpassword: yup
    .string()
    .min(8, "Параль должен содержать минимум 8 символа")
    .required("Обязательно поле"),
});

export const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPageForm>({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      username: "",
      userpassword: "",
    },
  });

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state: RootState) => state.userSlice.user)

  const onLoginSubmit: SubmitHandler<LoginPageForm> = (data) => {
    // console.log("Data: ", data);
    dispatch(changeUser(mockuser))
  };

  useEffect(() => {
    console.log('user ', user);
    if (user?.user_id) {
      navigate('/main')
    }
  }, [user])

  return (
    <div>
      <form onSubmit={handleSubmit(onLoginSubmit)}>
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <Input
              placeholder="Имя пользователя"
              type="text"
              isError={errors.username ? true : false}
              errorMessage={errors.username?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="userpassword"
          control={control}
          render={({ field }) => (
            <Input
              placeholder="Пароль"
              type="password"
              isError={errors.userpassword ? true : false}
              errorMessage={errors.userpassword?.message}
              {...field}
            />
          )}
        />
        <Button
          type="submit"
          buttonText="Войти"
          disabled={!!Object.keys(errors).length}
        />
      </form>
    </div>
  );
};
