package ferromera.chords.controller;

import ferromera.chords.domain.Song;
import ferromera.chords.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value="/api/test")
public class TestController {

    @Autowired
    private TestService service;


    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public Song getASong(){
        return service.getASong();
    }

}
