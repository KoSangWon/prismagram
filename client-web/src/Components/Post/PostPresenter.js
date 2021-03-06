import React from "react";
import styled from "styled-components";
import Avatar from "../Avatar";
import FatText from "../FatText";
import TextareaAutosize from "react-autosize-textarea";
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

const Files = styled.div`
  position: relative;
  height: 600px;
`;

// slider 만들기(방법 익히기, 유용하게 쓰일 듯)(showing을 props로 설정한 다음 넘겨줌, setTimeout으로 index 업데이트 해주고 현재 index에서 opacity 1로 해줌)
const File = styled.div`
  max-width: 100%;
  width: 100%;
  height: 600px;
  position: absolute;
  top: 0;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  opacity: ${(props) => (props.showing ? 1 : 0)};
  transition: opacity 0.5s linear;
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
  border-bottom: ${(props) => props.theme.lightGrayColor} 1px solid;
`;

// 라이브러리 스타일링 (괄호 내에 있는 component가 class name이라는 이름의 prop을 가지고 있을 때만 가능)
const TextArea = styled(TextareaAutosize)`
  border: none;
  width: 100%;
  resize: none;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;

export default ({
  user: { username, avatar },
  location,
  files,
  isLiked,
  likeCount,
  createdAt,
  newComment,
  currentItem,
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
      {files &&
        files.map((file, index) => (
          <File key={file.id} src={file.url} showing={index === currentItem} />
        ))}
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
      <TextArea placeholder={"Add a comment..."} {...newComment} />
    </Meta>
  </Post>
);
