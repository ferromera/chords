package ferromera.chords.service;

import ferromera.chords.domain.Song;
import org.springframework.stereotype.Service;

@Service
public class TestService {


    public Song getASong(){
        Song aSong = new Song();
        aSong.setId(123L);
        aSong.setName("Hey Jude");
        return aSong;
    }
}
