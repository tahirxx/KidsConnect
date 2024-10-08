@Entity
public class Meetup {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private LocalDate date;
    private String location;
    private String description;
    private String image;

    // Getters and Setters
}
