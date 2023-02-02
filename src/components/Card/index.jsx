import React from 'react';
import { FiThumbsUp } from 'react-icons/fi';
import feedImage from '../../assets/background-feed.png';
import { 
    CardContainer, 
    Content, 
    HasInfo, 
    ImageBackground, 
    PostInfo, 
    UserInfo, 
    UserPicture 
} from './styles';

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src={feedImage} alt="banner feed"/>
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/90798761?v=4'/>
                <div>
                    <h4>Rafael Resck</h4>
                    <p>Há 10 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito no curso de HTML e CSS no Bootcamp DIO do Global Avanade... <strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }