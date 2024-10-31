// SignupScreen.js

import React, { useState } from "react";
import { Text, StyleSheet, Alert } from "react-native";
import { Formik } from "formik";
import { createUserWithEmailAndPassword, sendEmailVerification, signOut } from "firebase/auth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { View, TextInput, Logo, Button, FormErrorMessage } from "../components";
import { Images, Colors, auth } from "../config";
import { useTogglePasswordVisibility } from "../hooks";
import { signupValidationSchema } from "../utils";

export const SignupScreen = ({ navigation }) => {
  const [errorState, setErrorState] = useState("");

  const {
    passwordVisibility,
    handlePasswordVisibility,
    rightIcon,
    handleConfirmPasswordVisibility,
    confirmPasswordIcon,
    confirmPasswordVisibility,
  } = useTogglePasswordVisibility();

  const handleSignup = async (values) => {
    const { email, password } = values;

    if (!email.endsWith("utfpr.edu.br")) {
      setErrorState("Por favor, use um e-mail institucional 'utfpr.edu.br'.");
      return;
    }

    try {
      // Cria o usuário
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Envia link de verificação
      await sendEmailVerification(userCredential.user);
      
      // Desconecta o usuário
      await signOut(auth);

      // Mostra mensagem de confirmação
      Alert.alert("Registro bem-sucedido!", "Verifique seu e-mail para confirmar a conta.");
      
      // Redireciona para a tela de login
      navigation.navigate("Login");
      
    } catch (error) {
      setErrorState(error.message);
    }
  };

  return (
    <View isSafe style={styles.container}>
      <KeyboardAwareScrollView enableOnAndroid={true}>
        <View style={styles.logoContainer}>
          <Logo uri={Images.logo} />
          <Text style={styles.screenTitle}>Crie uma nova conta!</Text>
        </View>
        <Formik
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={signupValidationSchema}
          onSubmit={(values) => handleSignup(values)}
        >
          {({
            values,
            touched,
            errors,
            handleChange,
            handleSubmit,
            handleBlur,
          }) => (
            <>
              <TextInput
                name="email"
                leftIconName="email"
                placeholder="Insira um e-mail válido"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
              />
              <FormErrorMessage
                error={touched.email && errors.email ? "E-mail é um campo necessário" : ""}
                visible={touched.email}
              />
              <TextInput
                name="password"
                leftIconName="key-variant"
                placeholder="Insira uma senha"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={passwordVisibility}
                textContentType="newPassword"
                rightIcon={rightIcon}
                handlePasswordVisibility={handlePasswordVisibility}
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
              />
              <FormErrorMessage
                error={errors.password}
                visible={touched.password}
              />
              <TextInput
                name="confirmPassword"
                leftIconName="key-variant"
                placeholder="Insira a senha novamente"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={confirmPasswordVisibility}
                textContentType="password"
                rightIcon={confirmPasswordIcon}
                handlePasswordVisibility={handleConfirmPasswordVisibility}
                value={values.confirmPassword}
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
              />
              <FormErrorMessage
                error={errors.confirmPassword}
                visible={touched.confirmPassword}
              />
              {errorState !== "" ? (
                <FormErrorMessage error={errorState} visible={true} />
              ) : null}
              <Button style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Registrar-se</Text>
              </Button>
            </>
          )}
        </Formik>
        <Button
          style={styles.borderlessButtonContainer}
          borderless
          title={"Já tem uma conta?"}
          onPress={() => navigation.navigate("Login")}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 12,
  },
  logoContainer: {
    alignItems: "center",
  },
  screenTitle: {
    fontSize: 32,
    fontWeight: "700",
    color: Colors.black,
    paddingTop: 20,
  },
  button: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    backgroundColor: Colors.orange,
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: "700",
  },
  borderlessButtonContainer: {
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});

