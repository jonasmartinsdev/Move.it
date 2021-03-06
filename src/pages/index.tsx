import Head from 'next/head';

import { useState } from 'react';
import { useRouter } from 'next/router';
import { FiArrowRight, FiGithub } from 'react-icons/fi';


import style from "../styles/HomeLogin.module.css";

export const HomeLogin = () => {

  const { push } = useRouter()

  const [username, setUsername] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    push(`/${username}`)
  }

  return (
    <div className={style.container}>
      <Head>
        <title>Login | move.it</title>
      </Head>

      <img src="./logo.svg" alt="Logo" />
    

      <section>
       

        <div>
          <h1>Bem-vindo</h1>
          <div className={style.textLogin}>
            <FiGithub size={40} color='#fff' />
            <p>Faça login com seu Github para começar</p>
          </div>

          <div className={style.inputContainer}>
            <input type="text" placeholder="Digite seu username" onChange={e => setUsername(e.target.value)} />
            <button type='button' onClick={handleSubmit}>
              <FiArrowRight size={40} color='#fff' />
            </button >
          </div>

        </div>
        
      </section>
    </div>
  );
}

export default HomeLogin;