import React from "react";
import styled from "styled-components";
import Avatar from "../Avatar";
import FatText from "../FatText";
import { HeartEmpty, HeartFull, Comment } from "../Icons";

const Post = styled.div`
  ${(props) => props.theme.whiteBox};
  width: 100%;
  max-width: 600px;
  margin-bottom: 25px;
`;

const Header = styled.header`
  padding: 15px;
  display: flex;
  align-items: center;
`;

const UserColumn = styled.div`
  margin-left: 10px;
`;

//block은 무조건 한줄을 점유하고, 다음 태그는 다음 줄로 감.
const Location = styled.span`
  display: block;
  margin-top: 5px;
  font-size: 12px;
`;

const Files = styled.div``;

const File = styled.img`
  max-width: 100%;
`;

const Button = styled.span`
  cursor: pointer;
`;

// first-child 방법 기억할 것
const Meta = styled.div`
  padding: 15px;
  ${Button} {
    &: first-child {
      margin-right: 10px;
    }
  }
  margin-bottom: 10px;
`;

const Buttons = styled.div``;

const TimeStamp = styled.span`
  font-weight: 300;
  text-transform: uppercase;
  opacity: 0.5;
  display: block;
  margin-top: 10px;
  font-size: 12px;
  margin: 10px 0px;
  padding-bottom: 10px;
  border-bottom: ${props => props.theme.lightGrayColor} 1px solid;
`;

export default ({
  user: { username, avatar },
  location,
  files,
  isLiked,
  likeCount,
  createdAt
}) => (
  <Post>
    <Header>
      <Avatar size="sm" url={avatar} />
      <UserColumn>
        <FatText text={username} />
        <Location>{location}</Location>
      </UserColumn>
    </Header>
    <Files>
      {files && files.map((file) => <File key={file.id} src={file.url} />)}
    </Files>
    <Meta>
      <Buttons>
        <Button>{isLiked ? <HeartFull /> : <HeartEmpty />}</Button>
        <Button>
          <Comment />
        </Button>
      </Buttons>
      <FatText text={likeCount === 1 ? "1 like" : `${likeCount} likes`} />
      <TimeStamp>{createdAt}</TimeStamp>
    </Meta>
  </Post>
);
