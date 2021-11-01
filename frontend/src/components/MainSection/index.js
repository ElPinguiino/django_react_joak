import React, {useState} from 'react';
import Video from '../../videos/video.MOV';
import {Button} from '../ButtonElement';
import { MainSectionContainer, MainSectionBg, VideoBg, MainSectionContent, MainSectionH1, MainSectionP, MainSectionBtnWrapper, ArrowForward, ArrowRight} from './MainSectionElements';

const MainSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <>
            <MainSectionContainer>
                <MainSectionBg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
                </MainSectionBg>
                <MainSectionContent>
                    <MainSectionH1>Welcome to Juan Of A Kind!</MainSectionH1>
                    <MainSectionP>
                        Best Beef Quesabirria Tacos in Salt Lake Valley!
                    </MainSectionP>
                    <MainSectionBtnWrapper>
                        <Button to="/placeorder" onMouseEnter={onHover}
                        onMouseLeave={onHover}>
                            Place Order! {hover ? <ArrowForward /> : <ArrowRight/>}
                        </Button>
                    </MainSectionBtnWrapper>
                </MainSectionContent>
            </MainSectionContainer>
        </>
    )
}

export default MainSection;
