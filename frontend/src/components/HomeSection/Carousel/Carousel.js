import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyledCarouselComponent, StyledCarouselItem, StyledP, BackgroundContainer, StyledBgImage, DetailsContainer } from '../HomeSectionElements';

const PostCarouselComponent = () => {

    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/imagepost/')
        setPosts(response.data)
    }

    useEffect(() =>{
        getPosts();
    }, [])

    return (
        <>
            <StyledCarouselComponent autoplay={ true } autoplay_speed={ 5000 }>
            {posts.map((posts) => (
                <StyledCarouselItem key={posts.post_id}>
                    <BackgroundContainer>
                        <StyledBgImage src={posts.post_image}/>
                        <DetailsContainer>
                        <StyledP>{posts.post_name}</StyledP>
                        <StyledP>{posts.post_details}</StyledP>
                    </DetailsContainer>
                    </BackgroundContainer>
                </StyledCarouselItem>
                )
                )
            }
            </StyledCarouselComponent>
        </>
    )
}

export default PostCarouselComponent