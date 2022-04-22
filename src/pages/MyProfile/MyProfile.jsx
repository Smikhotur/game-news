import React from 'react';
import { SpaceGame } from '../../components/SpaceGame/SpaceGame';
import { getCurrentUser } from '../../helpers/getAuthUser';
import { S } from './styles';

const MyProfile = () => {
  const user = getCurrentUser().user;

  return (
    <S.Container>
      <S.Wrapper>
        <S.Frame>
          <S.LeftBox>
            <S.InnerImage>
              <S.Photo src={user?.avatar} />
              <S.TextInner>
                <S.FullName>{`${user?.firstName} ${user?.lastName}`}</S.FullName>
                <S.Email>{user?.email}</S.Email>
                <S.PhoneNumber>{user?.nikname}</S.PhoneNumber>
              </S.TextInner>
            </S.InnerImage>
          </S.LeftBox>
          <S.RightBox id="rightBox">
            <SpaceGame />
          </S.RightBox>
        </S.Frame>
      </S.Wrapper>
    </S.Container>
  );
};

export default MyProfile;
