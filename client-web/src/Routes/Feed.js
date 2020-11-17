import { gql, useQuery } from '@apollo/client';
import React from 'react';
import styled from "styled-components";
import Loader from '../Components/Loader';

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
    const {error, loading, data} = useQuery(FEED_QUERY);
    
return <Wrapper>{loading && <Loader/>}</Wrapper>;
}