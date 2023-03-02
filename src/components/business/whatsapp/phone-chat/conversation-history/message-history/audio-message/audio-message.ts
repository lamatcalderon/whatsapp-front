import { defineComponent, ref, watchEffect } from "vue";

import useSession from "../../../../../../../composables/common/session.composable";

import { convertTime } from "../../../../../../../utils/media.util";

import { APP_PREFIX } from "../../../../../../../constants/app.constant";

export default defineComponent({
    props: {
        multimediaMessage: {
            type: Object,
            default: {}
        }
    },
    setup() {
        const playbackTime: any = ref(0);
        const isPlaying = ref(false);
        const listenerActive = ref(false);

        const refAudio: any = ref(null);
        const refSlider: any = ref(null);

        const {
            whatsappSession
        } = useSession();

        const elapsedTime = () => {
            if (refAudio.value) {
                var seconds = refAudio.value.currentTime;
                return convertTime(seconds);
            }
        };

        const playAudio = () => {
            isPlaying.value = true;
            refAudio.value.play();
        }

        const pauseAudio = () => {
            refAudio.value.pause();
            isPlaying.value = false;
        }

        const cleanupListeners = () => {
            if (refAudio?.value) {
                //playbackTime.value = '0';
                refAudio.value.removeEventListener("timeupdate", playbackListener);
                refAudio.value.removeEventListener("ended", endListener);
                refAudio.value.removeEventListener("pause", pauseListener);
            }
        };

        const endListener = () => {            
            isPlaying.value = false;
            listenerActive.value = false;
            cleanupListeners();
        };

        const pauseListener = () => {
            isPlaying.value = false;
            listenerActive.value = false;
            cleanupListeners();
        };

        const playbackListener = () => {
            if (refAudio?.value) {
                playbackTime.value = refAudio.value.currentTime;
                refAudio.value.addEventListener("ended", endListener);
                refAudio.value.addEventListener("pause", pauseListener);
                if(playbackTime.value === refAudio.value.duration) {
                    playbackTime.value = '0';
                }
            }
        }

        watchEffect(() => {
            isPlaying.value;
            if (isPlaying.value) {
                if (!listenerActive.value) {
                    listenerActive.value = true;
                    refAudio.value.addEventListener("timeupdate", playbackListener);
                }
            }
        });

        watchEffect(() => {
            playbackTime.value;
            if (refAudio?.value) {
                var diff = Math.abs(playbackTime.value - refAudio.value.currentTime);
                if (diff > 0.01) {
                    refAudio.value.currentTime = playbackTime.value;
                }
            }
        });

        const getRandomInt = (max: number) => {
            return Math.floor(Math.random() * max);
        }

        const num = getRandomInt(2);

        return {
            APP_PREFIX,
            num,
            isPlaying,
            playbackTime,
            refAudio,
            refSlider,
            whatsappSession,
            convertTime,
            elapsedTime,
            playAudio,
            pauseAudio
        }
    }
})