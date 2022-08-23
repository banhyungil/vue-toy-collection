<template>
    <div>
        <section class="title">
            <h1>아이유(IU) 팬명록</h1>
            <p>현재기온 : <span id="temp">00.0도</span></p>
        </section>
        <section class="sect-hole">
            <section class="sect-write">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="userNm" placeholder="닉네임">
                    <label for="userNm">닉네임</label>
                </div>
                <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="comment"></textarea>
                    <label for="comment">응원댓글</label>
                </div>
                <button type="button" class="btn btn-dark" onclick="saveCheer()">응원 남기기</button>
            </section>
            <section class="sect-comment">
            
            </section>
        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Nanum+Gothic&family=Nanum+Gothic+Coding:wght@400;700&display=swap');
    .title {
        background-image: url("https://t1.daumcdn.net/cfile/tistory/9961F3345BBE195808?original");
        background-position: center;
        background-size: cover;

        width: 100%; height: 300px;
        margin: auto;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        color: floralwhite;
        font-family: 'Black Han Sans', sans-serif;
    }

    .sect-hole {
        width: 600px;
        margin: 10px auto;
    }

    .sect-write, .sect-comment > article {
        margin: 20px;
        border: 1px solid gray;
        padding: 15px;
    }

    .sect-write > button {
        margin-top: 15px;
    }

    #comment {
        height: 120px;
    }
    .sect-comment > article {
        border: 1px solid gray;
    }

    article .comment {
        transition: box-shadow .4s ease-in-out;
        font-size: 16px;
    }

    article .userNm {
        /* <property> <duration> <timing-function> <delay>
        property : 속성값 명시, all로 설정시 모든 속성에 적용
        */
        transition: color .4s ease;
    }
    article .userNm {
        font-size: 14px;
        color: darkgray;
    }
    .sect-comment > article:hover > .comment{
        font-weight: bolder;
        /* inset | offset-x | offset-y | color
        inset : 안에서 그림자가 드리운다
        */
        box-shadow: inset 600px 0 0 #fff685;
    }
    .sect-comment > article:hover > .userNm{
        color: #fa985a;
        font-weight: bold;
    }
</style>