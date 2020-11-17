import { gql, useQuery } from '@apollo/client';
import React from 'react';
import styled from "styled-components";
import Loader from '../Components/Loader';
import PostContainer from '../Components/Post';

const FEED_QUERY = gql`
    query {
        seeFeed{
            id
            location
            caption
            user{
                id
                avatar
                username
            }
            files{
                id
                url
            }
            likeCount
            isLiked
            comments {
                id
                text
                user{
                    id
                    username
                }
            }
            createdAt
        }
    } 
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 80vh;
`;

export default () => {
  const { error, loading, data } = useQuery(FEED_QUERY);
  console.log(data);
  return (
    <Wrapper>
      {loading && <Loader />}
      {!loading &&
        data &&
        data.seeFeed &&
        data.seeFeed.map((post) => (
          <PostContainer
            key={post.id}
            id={post.id}
            user={post.user}
            files={post.files}
            likeCount={post.likeCount}
            isLiked={post.isLiked}
            comments={post.comments}
            createdAt={post.createdAt}
          />
        ))}
    </Wrapper>
  );
};