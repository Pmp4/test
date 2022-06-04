package com.example.demo.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class WebPostController {
	@RequestMapping("/post")
    public ModelAndView main ()
    {
		System.out.println("aaaaaa");
	    ModelAndView model = new ModelAndView("post");
	    
	    model.addObject("testvalue", "안녕!");
	 
	    return model;
    }
	

}
