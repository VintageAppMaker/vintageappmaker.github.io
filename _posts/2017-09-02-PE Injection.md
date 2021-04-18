---
layout: post
title: PE Injection
categories: cplusplus
tags: [windows Programming, reverse engineering]
---

### 1. 목적
개발한 DLL을 특정 인증된 Application에서만 실행가능하도록 한다. 
- DLL을 아무나 사용하지 못하도록 해야할 경우
- DLL 사용자를 관리하고자 하는 경우(외부 개발자가 최종 릴리즈 요청하면 인증키를 EXE에 삽입해준다)
      
### 2. 구조
DLL에서 자신을 호출한 EXE의 정보를 분석한다. EXE의 해더(PE)에서 인증 정보가 있으면 DLL 내의 메시지 함수를 제거한다.
메시지 함수는 디버깅을 어렵게 하기위해서 Assembly 형태의 배열로 만들어 사용한다.
![](http://postfiles7.naver.net/20110901_230/adsloader_1314864120480cdBBz_PNG/1.PNG?type=w2)

[PE Injection](https://github.com/VintageAppMaker/PE_Injection)
