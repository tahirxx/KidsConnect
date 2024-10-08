@Service
public class MeetupService {
    @Autowired
    private MeetupRepository meetupRepository;

    public List<Meetup> getAllMeetups() {
        return meetupRepository.findAll();
    }
}

@RestController
@RequestMapping("/api/meetups")
public class MeetupController {
    @Autowired
    private MeetupService meetupService;

    @GetMapping
    public List<Meetup> getMeetups() {
        return meetupService.getAllMeetups();
    }
}
