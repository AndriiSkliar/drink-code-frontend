import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import axios from 'axios'

const BASE_URL = 'https://drink-code-backend.onrender.com'

import {
  WelcomeWrapper
} from '../../components/Welcome/Welcome.styled';

const VerificationPage = () => {
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        axios.get(`${BASE_URL}/api/auth/verify/${id}`)
            .then(({ data }) => {
                console.log(data)
            })
    }, [id]);

    return (
        <WelcomeWrapper>
            <p>Ваш email верiфiковано</p>
            <a href='http://localhost:5173/drink-code-frontend/signin'>Перейти на сторiнку входу</a>
        </WelcomeWrapper>
  );
};

export default VerificationPage;