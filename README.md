<h1>README.md</h1>

<h3>API 명세서 URL</h3>

<br/>

```
https://kuslikelion.notion.site/kuslikelion/API-09523bd3aad743f884b2ff18271086e6
```

<br/>
<h3>ERD URL</h3>
<br/>

```
https://www.erdcloud.com/p/Z9NFWpCKgE3pyub5A
```

<br />

<h3>더 고민해보기</h3>

<br/>

```
1. **암호화 방식**
    - 비밀번호를 DB에 저장할 때 Hash를 이용했는데, Hash는 단방향 암호화와 양방향 암호화 중 어떤 암호화 방식에 해당할까요?
        - Hash는 단방향 암호화이다.
    - 비밀번호를 그냥 저장하지 않고 Hash 한 값을 저장 했을 때의 좋은 점은 무엇인가요?
        - 보안 강화

2. **인증 방식**
    - JWT(Json Web Token)을 이용해 인증 기능을 했는데, 만약 Access Token이 노출되었을 경우 발생할 수 있는 문제점은 무엇일까요?
        - 작성 예정
    - 해당 문제점을 보완하기 위한 방법으로는 어떤 것이 있을까요?
        - 작성 예정

3. **인증과 인가**
    - 인증과 인가가 무엇인지 각각 설명해 주세요.
        - 인증 : JWT를 통해 사용자를 인증하는 것
        - 인가 : 현재 사용자가 수행하고자 하는 작업에 권한을 주는 것 ~ | 권한 부여 ~
    - 과제에서 구현한 Middleware는 인증에 해당하나요? 인가에 해당하나요? 그 이유도 알려주세요.

4. **Http Status Code**
    - 과제를 진행하면서 사용한 Http Status Code를 모두 나열하고, 각각이 의미하는 것과 어떤 상황에 사용했는지 작성해 주세요.

5. **리팩토링**
    - MySQL, Prisma로 개발했는데 MySQL을 MongoDB로 혹은 Prisma 를 TypeORM 로 변경하게 된다면 많은 코드 변경이 필요할까요? 주로 어떤 코드에서 변경이 필요한가요?
    - 만약 이렇게 DB를 변경하는 경우가 또 발생했을 때, 코드 변경을 보다 쉽게 하려면 어떻게 코드를 작성하면 좋을 지 생각나는 방식이 있나요? 있다면 작성해 주세요.

6. **API 명세서**
    - notion 혹은 엑셀에 작성하여 전달하는 것 보다 [swagger](https://swagger.io/) 를 통해 전달하면 장점은 무엇일까요?
```
