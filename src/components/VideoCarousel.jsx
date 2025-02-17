import { hightlightsSlides } from '../constants'
import { useRef, useState, useEffect } from 'react'
import { pauseImg, playImg, replayImg } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import scrollTrigger from 'gsap/all'

gsap.registerPlugin(scrollTrigger)

const VideoCarousel = () => {
    const videoRef = useRef([])
    const videoSpanRef = useRef([])
    const videoDivRef = useRef([])
    const [video, setVideo]= useState({
        isEnd:false,
        startPlay:false,
        videoId:0,
        isLastVideo:false,
        isPlaying:false
    })
    const {isEnd, startPlay, videoId, isLastVideo, isPlaying} = video
    
    useGSAP(()=>{
        gsap.to('#slider',{transform:`translateX(${-100 * videoId}%)`, duration:2, ease:'power2.inOut'})
        gsap.to('#video', {scrollTrigger:{
            trigger:'#video',
            toggleActions:'restart none none none'
        },
        onComplete:()=>{
            setVideo((prevVideo)=>({...prevVideo, startPlay:true, isPlaying:true}))
        }
    })
    },[isEnd, videoId])
    const [loadedData, setLoadedData] = useState([])
    useEffect(()=>{
        if(loadedData.length > 3){
            if(!isPlaying){
                videoRef.current[videoId].pause();
            }else{
                startPlay && videoRef.current[videoId].play();
            }
        }
    },[videoId, startPlay, isPlaying, loadedData])
    // for loading the video
    const handleLoadedData =(i, e)=> setLoadedData((pre)=>[...pre, e])
    // for the progress bar
    useEffect(()=>{
        let currentProgress = 0;
        let span = videoSpanRef.current
        // for animating the progress bar
        if(span[videoId]){
            let anima = gsap.to(span[videoId],{
                onUpdate:()=>{
                    const progress = Math.ceil(anima.progress()* 100)
                    if(progress != currentProgress){
                        currentProgress = progress
                        gsap.to(videoDivRef.current[videoId], {width:window.innerWidth < 760 ? '10vw' : window.innerWidth < 1200 ? '10vw' : '4vw'})
                    }
                    gsap.to(span[videoId], {width:`${currentProgress}%`, backgroundColor:'white'})
                },
                onComplete:()=>{
                    if(isPlaying){
                        gsap.to(videoDivRef.current[videoId], {width:'12px'})
                        gsap.to(span[videoId], {backgroundColor:'#afafaf'})
                    }
                }
            })
            if(videoId === 0){
                anima.restart();
            }
            // modifying the length of the animation(progress bar)
            const animationUpdate = ()=>{
                anima.progress(videoRef.current[videoId].currentTime / hightlightsSlides[videoId].videoDuration)
            }
            if(isPlaying){
                gsap.ticker.add(animationUpdate)
            }else{
                gsap.ticker.remove(animationUpdate)
            }
        }
    },[videoId, startPlay])

    const handleProcess =(type, i)=>{
        switch (type){
            case'video-end':
            setVideo((prevVideo)=> ({...prevVideo, isEnd:true, videoId:i+1}))
            break;
            case 'video-last':
                setVideo((prevVideo)=>({...prevVideo, isLastVideo:true}))
            break;
            case 'video-reset':
                setVideo((prevVideo)=>({...prevVideo, isLastVideo:false, videoId:0}))
            break; 
            case 'play':
                setVideo((prevVideo)=>({...prevVideo, isPlaying: !prevVideo.isPlaying}))
            break;
            case 'pause':
                setVideo((prevVideo)=>({...prevVideo, isPlaying: !prevVideo.isPlaying}))
            break;
            default:
                return video;
             
        }
    }
  return (
    <>
        <div className='flex items-center'>
            {hightlightsSlides.map((list, i)=>(
                <div key={list.id} id='slider' className='sm:pr-20 pr-10'>
                    <div className='video-carousel_container'>
                        <div className='w-full h-full flex-center rounded-3xl overflow-hidden bg-black'>
                            <video id='video' className={`${list.id === 2 && 'translate-x-44'} pointer-events-none`} playsInline={true} preload='auto' muted ref={(Element)=> (videoRef.current[i] = Element)} onPlay={()=>{
                                setVideo((prevVideo)=>({
                                    ...prevVideo, isPlaying:true
                                }))
                                }} onLoadedMetadata={(e)=>handleLoadedData(i,e)} onEnded={()=> i !== 3 ? handleProcess('video-end', i) : handleProcess('video-last')}>
                                <source src={list.video} type='video/mp4' />
                            </video>
                        </div>
                        <div className='absolute top-12 left-[5%] z-10'>
                            {list.textLists.map((text)=>(
                                <p key={text} className='md:text-2xl text-xl font-medium'>{text}</p>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className='relative flex items-center top-10 '>
            <div className='flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full'>
                {videoRef.current.map((_, i)=>(
                    <div key={i} ref={(Element)=>(videoDivRef.current[i] = Element)} className='mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer flex'>
                        <span className='absolute h-full w-full rounded-full' ref={(element)=>(videoSpanRef.current[i]= element)}/>
                    </div>
                ))}
            </div>
            <button className='control-btn' >
                <img src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg} alt={isLastVideo ? 'replay' : !isPlaying ? 'play' : 'pause'} onClick={ isLastVideo ? ()=> handleProcess('video-reset') : !isPlaying ? ()=> handleProcess('play') : ()=> handleProcess('pause')}/>
            </button>
        </div>
    </>
  )
}

export default VideoCarousel
