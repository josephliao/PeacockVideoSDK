import axios from 'axios';
import { videoFunction } from './src/video-player';
import { vdSeries } from './src/vd-series';
import { vdType } from './src/vd-type';

const video = new videoFunction();
const video_url: string = 'https://peacock.com/videos';
const vdS = vdSeries;
const vdT = vdType;

export function getVideoById(id: number): Promise<object>{
    return new Promise((resolve, reject) =>{
        // Do some Function
        axios
            .get(`${video_url}/${id}`)
            .then((resp) =>{
                resolve(video.vdS().vdT());
            })
            .catch(reject);
    });
}

export default {getVideoById}