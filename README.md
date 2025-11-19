# starscope

## 0. 목차

1.  [프로젝트 소개](#1-프로젝트-소개)
2.  [전체적인 데이터 흐름](#2-전체적인-데이터-흐름)
3.  [기술 스택](#3-기술-스택)
4.  [코딩 컨벤션](#4-코딩-컨벤션)
5.  [시연 이미지](#5-시연-이미지)
6.  [폴더 구조](#6-폴더-구조)
7.  [성과 및 느낀 점](#8-성과-및-느낀-점)
    <br>

## 1. 프로젝트 소개

이 프로젝트는 맥도날드와 요아정 사이트를 참고한 실제 서비스 중인 홈페이지를 모티브 삼아 제작한 망원경 사이트 입니다. 가상의 브랜드를 시작으로 브랜드 소개, 제품소개, 매장위치, 이벤트 등등 컨텐츠를 담고 있으며, 사용자와 관리자간 서로 소통할 수 있는 문의 페이지도 포함되어 있습니다. 또한 관리자페이지에는 새로운 글 발행 수정 삭제까지 모든 기능을 담고 있어 홈페이지를 관리할 수 있으며, 간단한 데시보드로 전체적인 데이터를 확인할 수 있는 사이트 입니다.

<br />
<br />

- 사용자페이지 URL: [https://5647kr.github.io/starscope/](https://5647kr.github.io/starscope/)
- 관리자페이지 URL: [https://5647kr.github.io/starscope/auth/login](https://5647kr.github.io/starscope/auth/login)
  <br />

- 관리자 계정<br/>
  ID : admin@admin.com<br/>
  PW : qwer1234
  <br>
  <br>

## 2. 전체적인 데이터 흐름

데이터를 supabase와 통신하는것이 아닌 중간에 zustand를 이용하고 있습니다. 한번 불러온 데이터는 zustand에 저장되어 다음 데이터를 가져올 때 최소 0.01ms의 빠른 속도로 데이터를 가져올 수 있게 하였습니다.
<br/>
또한 이미지는 cloundary를 이용해 이미지 용량을 대폭 죽여 빠른 렌더링이 가능하게끔 하였습니다.

### 1. 전체적인 데이터 흐름도
![전체적인 데이터 흐름](https://github.com/user-attachments/assets/b2ab962f-dfb5-4545-9b1c-98362fa5e475.png)


### 2. supabase의 데이터 구조
![supabase의 데이터 구조](https://github.com/user-attachments/assets/e4fa9d89-65d8-4abf-95de-9e6e497f5db0)

<br>
<br>

## 3. 기술 스택

<table>
  <tr>
    <td align="center" width="100px">사용 기술</td>
    <td width="800px">
      <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=ffffff"/>&nbsp
      <img src="https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=ReactRouter&logoColor=white"/>&nbsp 
      <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>&nbsp
      <img src="https://img.shields.io/badge/zustand-2c51c1?style=for-the-badge&logo=zustand&logoColor=white"/>&nbsp 
    </td>
  </tr>
  <tr>
    <td align="center">기술 도구</td>
    <td>
      <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>&nbsp 
      <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
    </td>
  <tr>
  <tr>
    <td align="center">API</td>
    <td>
     <img src="https://img.shields.io/badge/supabase-000000?style=for-the-badge&logo=supabase&logoColor=hsl(153.1deg 60.67% 53.14%)"/>&nbsp 
     <img src="https://img.shields.io/badge/lucide react-ffffff?style=for-the-badge&logo=lucide&logoColor=hsl(153.1deg 60.67% 53.14%)"/>&nbsp 
    </td>
  <tr>
    <td align="center">디자인</td>
    <td>
      <img src="https://img.shields.io/badge/Figma-d90f42?style=for-the-badge&logo=Figma&logoColor=white"/>&nbsp  
    </td>
  </tr>
  <tr>
    <td align="center">IDE</td>
    <td>
      <img src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white"/>&nbsp
  </tr>
</table>

<br>

## 4. 코딩 컨벤션

<br>

<detail>
  <table>
    <tr>
      <th>커밋 메세지</th>
      <th>의미</th>
    </tr>
    <tr>
      <td>Feat</td>
      <td>새로운 기능 추가</td>
    </tr>
    <tr>
      <td>Fix</td>
      <td>버그 & 에러 수정</td>
    </tr>
    <tr>
      <td>File</td>
      <td>리드미 등 문서 수정, 라이브러리 설치</td>
    </tr>
    <tr>
      <td>Style</td>
      <td>코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우</td>
    </tr>
    <tr>
      <td>Design</td>
      <td>UI 디자인 변경</td>
    </tr>
    <tr>
      <td>Refactor</td>
      <td>코드 리팩토링</td>
    </tr>
    <tr>
      <td>Test</td>
      <td>테스트 코드, 리팩토링 테스트 코드 추가</td>
    </tr>
    <tr>
      <td>Chore</td>
      <td>빌드 업무 수정, 패키지 매니저 수정</td>
    </tr>
    <tr>
      <td>Rename</td>
      <td>파일명 혹은 폴더명 수정, 위치 옮기기</td>
    </tr>
    <tr>
      <td>Remove</td>
      <td>파일 삭제</td>
    </tr>
  </table>
</detail>

<br>
<br>

## 5. 시연 이미지


- ### 홈페이지 / 브랜드 페이지

|                                                                    홈페이지                                                                    |                                                                   브랜드 페이지                                                                    |
| :-----------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: |
| ![홈페이지](https://github.com/user-attachments/assets/d6b18105-5fac-4153-885b-364a991d676c) | ![Image](https://github.com/user-attachments/assets/101a28af-c74c-4728-9eb3-5f28f49c0769) |


<br>
<br>

## 6. 폴더 구조

<details>
<summary>폴더 구조</summary>
<div markdown="1">

```
StarScope
┣ 📦src
┃ ┣ 📂admin
┃ ┃ ┣ 📂commu
┃ ┃ ┃ ┣ 📂event
┃ ┃ ┃ ┃ ┣ 📜EventCreate.jsx
┃ ┃ ┃ ┃ ┗ 📜EventPost.jsx
┃ ┃ ┃ ┣ 📂faq
┃ ┃ ┃ ┃ ┣ 📜FaqCreate.jsx
┃ ┃ ┃ ┃ ┗ 📜FaqPost.jsx
┃ ┃ ┃ ┗ 📂qna
┃ ┃ ┃ ┃ ┗ 📜QnaPost.jsx
┃ ┃ ┣ 📂home
┃ ┃ ┃ ┗ 📜HomePost.jsx
┃ ┃ ┣ 📂product
┃ ┃ ┃ ┣ 📜ProductCreate.jsx
┃ ┃ ┃ ┗ 📜ProductPost.jsx
┃ ┃ ┣ 📂store
┃ ┃ ┃ ┣ 📜StoreBusiness.jsx
┃ ┃ ┃ ┣ 📜StoreCreate.jsx
┃ ┃ ┃ ┗ 📜StorePost.jsx
┃ ┃ ┣ 📜AdminLogin.jsx
┃ ┃ ┗ 📜AdminOutlet.jsx
┃ ┣ 📂api
┃ ┃ ┣ 📜Log.jsx
┃ ┃ ┣ 📜Menu.jsx
┃ ┃ ┗ 📜Post.jsx
┃ ┣ 📂assets
┃ ┃ ┗ 📂img
┃ ┃ ┃ ┣ 📜homeImgContent1.jpg
┃ ┃ ┃ ┣ 📜homeImgContent2.jpg
┃ ┃ ┃ ┣ 📜homeImgContent3.jpg
┃ ┃ ┃ ┣ 📜homeImgContent4.jpg
┃ ┃ ┃ ┣ 📜homeNoticeContent.jpg
┃ ┃ ┃ ┗ 📜homeNoticeProduct.png
┃ ┣ 📂components
┃ ┃ ┣ 📜AdminHeader.jsx
┃ ┃ ┣ 📜AdminNav.jsx
┃ ┃ ┣ 📜Button.jsx
┃ ┃ ┣ 📜ConfirmWrap.jsx
┃ ┃ ┣ 📜ErrorBox.jsx
┃ ┃ ┣ 📜Input.jsx
┃ ┃ ┣ 📜SectionWrap.jsx
┃ ┃ ┣ 📜UserFooter.jsx
┃ ┃ ┗ 📜UserHeader.jsx
┃ ┣ 📂store
┃ ┃ ┣ 📜menuStore.js
┃ ┃ ┗ 📜postStore.js
┃ ┣ 📂style
┃ ┃ ┗ 📜GlobalStyle.jsx
┃ ┣ 📂user
┃ ┃ ┣ 📂brand
┃ ┃ ┃ ┗ 📜UserBrand.jsx
┃ ┃ ┣ 📂commu
┃ ┃ ┃ ┣ 📂event
┃ ┃ ┃ ┃ ┣ 📜CommuEvent.jsx
┃ ┃ ┃ ┃ ┗ 📜CommuEventDetail.jsx
┃ ┃ ┃ ┣ 📂faq
┃ ┃ ┃ ┃ ┗ 📜CommuFaq.jsx
┃ ┃ ┃ ┣ 📂qna
┃ ┃ ┃ ┃ ┗ 📜CommuQna.jsx
┃ ┃ ┃ ┗ 📜CommuOutlet.jsx
┃ ┃ ┣ 📂home
┃ ┃ ┃ ┗ 📜UserHome.jsx
┃ ┃ ┣ 📂product
┃ ┃ ┃ ┣ 📜UserProduct.jsx
┃ ┃ ┃ ┗ 📜UserProductDetail.jsx
┃ ┃ ┣ 📂store
┃ ┃ ┃ ┗ 📜UserStore.jsx
┃ ┃ ┗ 📜UserOutlet.jsx
┃ ┣ 📜App.jsx
┃ ┣ 📜main.jsx
┃ ┗ 📜supabaseClient.js
```

 </div>
</details>

<br>
<br>

## 7. 성과 및 느낀 점
이번 프로젝트를 통해 사용자 페이지부터 관리자 페이지까지 작업해볼 수 있는 프로젝트 였습니다. 이 과정을 통해 백엔드와의 데이터 통신을 더욱 더 자세히 알 수 있는 계기가 되었습니다. 비록 실제 백엔드 개발자와의 통신은 아니였지만 실전에서의 통신을 체험할 수 있는 좋은 기회였다고 생각합니다.