package com.example.demo.api;

import java.util.Random;
import org.springframework.web.bind.annotation.*;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

@RestController
public class PostController {
	@GetMapping("/api/post")
	public String getList() {
		System.out.println("aaa");
		String[] articleTitles = new String[13];
		articleTitles[0] = "네이버 노조 \"계열사 5곳 임금협상 결렬…중노위에 조정 신청\"";
		articleTitles[1] = "세계 스마트폰 시장 전년대비 3% ‘뒷걸음질’…美·中·러 3대 악재 여파";
		articleTitles[2] = "[디아블로 이모탈]②출시 전 사전오픈, 모바일 판도 흔들까";
		articleTitles[3] = "'이름값 톡톡' 블리자드 신작 '디아블로 이모탈' 미국서도 흥행";
		articleTitles[4] = "'AI 반도체 선두주자' 리벨리온, 몸값 3500억";
		articleTitles[5] = "ICT 혁신 이끌 적임자…박윤규 과기정통부 차관 인선에 안도";
		articleTitles[6] = "[김한준 기자의 e게임] 스나이퍼 엘리트5, 독특한 매력의 저격 FPS";
		articleTitles[7] = "[後스토리]한미 '10번' 넘게 힘줘 말한 '사이버 보안'…숙원사업 풀리나";
		articleTitles[8] = "카카오, 새 근무제 도입 '난항'…이유는 소통부족?";
		articleTitles[9] = "'구글 갑질' 빈틈 노린다…원스토어, 반사효과에 IPO까지?";
		articleTitles[10] = "NASA 차세대 우주복, 이 회사들이 만든다";
		articleTitles[11] = "2위 삼성, 1위 애플과 격차 좁혔다…갤럭시워치 점유율 '쑥'";
		articleTitles[12] = "이찬희 삼성 준법위원장 \"이재용 사면 결단내려야\"";
		long unixTime = System.currentTimeMillis();
		
		Random random = new Random();
		
		JsonObject result = new JsonObject();
		result.addProperty("code", 200);
		result.addProperty("time", unixTime);
		
		JsonArray postList = new JsonArray();
		for(int i = 0; i < 13; ++i) {
			JsonObject postItem = new JsonObject();
			long myTime = unixTime;
			if(random.nextInt(10) < 5) {
				myTime += random.nextInt(86400 * 30) * 1000;
			} else {
				myTime -= random.nextInt(86400 * 30) * 1000;
			}
			postItem.addProperty("title", articleTitles[i]);
			postItem.addProperty("time", myTime);
			postList.add(postItem);
			
		}
		result.add("posts", postList);
		
		return result.toString();
	}
	

}

//build.gradle에 implementation group: 'com.google.code.gson', name: 'gson', version: '2.8.5' 추가

