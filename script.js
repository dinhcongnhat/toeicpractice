const quizData = {
    part1: [
        { id: 1, img: 'https://s4-media1.study4.com/media/tez_media/img/ets_toeic_2019_test_3_ets_toeic_2019_test_3_1.png', answer: 'A' },
        { id: 2, img: 'https://s4-media1.study4.com/media/tez_media/img/ets_toeic_2019_test_3_ets_toeic_2019_test_3_2.png', answer: 'B' },
        { id: 3, img: 'https://s4-media1.study4.com/media/tez_media/img/ets_toeic_2019_test_3_ets_toeic_2019_test_3_3.png', answer: 'A' },
        { id: 4, img: 'https://s4-media1.study4.com/media/tez_media/img/ets_toeic_2019_test_3_ets_toeic_2019_test_3_4.png', answer: 'B' },
        { id: 5, img: 'https://s4-media1.study4.com/media/tez_media/img/ets_toeic_2019_test_3_ets_toeic_2019_test_3_5.png', answer: 'C' },
        { id: 6, img: 'https://s4-media1.study4.com/media/tez_media/img/ets_toeic_2019_test_3_ets_toeic_2019_test_3_6.png', answer: 'D' },
    ],
    part2: [
        { id: 7, question: 'Mark your answer on your answer sheet.', answer: 'A' }, { id: 8, question: 'Mark your answer on your answer sheet.', answer: 'B' },
        { id: 9, question: 'Mark your answer on your answer sheet.', answer: 'B' }, { id: 10, question: 'Mark your answer on your answer sheet.', answer: 'C' },
        { id: 11, question: 'Mark your answer on your answer sheet.', answer: 'A' }, { id: 12, question: 'Mark your answer on your answer sheet.', answer: 'B' },
        { id: 13, question: 'Mark your answer on your answer sheet.', answer: 'C' }, { id: 14, question: 'Mark your answer on your answer sheet.', answer: 'A' },
        { id: 15, question: 'Mark your answer on your answer sheet.', answer: 'A' }, { id: 16, question: 'Mark your answer on your answer sheet.', answer: 'C' },
        { id: 17, question: 'Mark your answer on your answer sheet.', answer: 'A' }, { id: 18, question: 'Mark your answer on your answer sheet.', answer: 'A' },
        { id: 19, question: 'Mark your answer on your answer sheet.', answer: 'A' }, { id: 20, question: 'Mark your answer on your answer sheet.', answer: 'B' },
        { id: 21, question: 'Mark your answer on your answer sheet.', answer: 'C' }, { id: 22, question: 'Mark your answer on your answer sheet.', answer: 'C' },
        { id: 23, question: 'Mark your answer on your answer sheet.', answer: 'B' }, { id: 24, question: 'Mark your answer on your answer sheet.', answer: 'A' },
        { id: 25, question: 'Mark your answer on your answer sheet.', answer: 'C' }, { id: 26, question: 'Mark your answer on your answer sheet.', answer: 'B' },
        { id: 27, question: 'Mark your answer on your answer sheet.', answer: 'C' }, { id: 28, question: 'Mark your answer on your answer sheet.', answer: 'B' },
        { id: 29, question: 'Mark your answer on your answer sheet.', answer: 'A' }, { id: 30, question: 'Mark your answer on your answer sheet.', answer: 'B' },
        { id: 31, question: 'Mark your answer on your answer sheet.', answer: 'A' },
    ],
    part3: [
        { passage: 'Questions 32-34 refer to the following conversation.', questions: [ { id: 32, question: 'What does the company most likely produce?', options: { A: 'Print advertisements', B: 'Television shows', C: 'Computer parts', D: 'Musical instruments' }, answer: 'B' }, { id: 33, question: 'What department will the man work in?', options: { A: 'Accounting', B: 'Legal', C: 'Human resources', D: 'Security' }, answer: 'A' }, { id: 34, question: 'What does the man like about his work area?', options: { A: 'It is conveniently located.', B: 'It has a good view.', C: 'It is quiet.', D: 'It is nicely decorated.' }, answer: 'C' }, ] },
        { passage: 'Questions 35-37 refer to the following conversation.', questions: [ { id: 35, question: 'What is the conversation mainly about?', options: { A: 'A room reservation', B: 'A canceled event', C: 'A restaurant recommendation', D: 'A misplaced item' }, answer: 'A' }, { id: 36, question: 'What does the man need to provide?', options: { A: 'A security deposit', B: 'A revised schedule', C: 'A form of identification', D: 'A business address' }, answer: 'C' }, { id: 37, question: 'What do the visitors ask for?', options: { A: 'A refund', B: 'Better lighting', C: 'Menu options', D: 'More chairs' }, answer: 'D' }, ] },
        { passage: 'Questions 38-40 refer to the following conversation.', questions: [ { id: 38, question: 'Where does the conversation most likely take place?', options: { A: 'At a shopping mall', B: 'At a theater', C: 'In a sports stadium', D: 'On a train' }, answer: 'D' }, { id: 39, question: 'Why does the woman say, "The football championship is this afternoon"?', options: { A: 'To extend an invitation', B: 'To offer encouragement', C: 'To give an explanation', D: 'To request a schedule change' }, answer: 'C' }, { id: 40, question: 'What does the man say he needs to purchase?', options: { A: 'Tickets', B: 'Clothes', C: 'Food', D: 'Furniture' }, answer: 'B' }, ] },
        { passage: 'Questions 41-43 refer to the following conversation.', questions: [ { id: 41, question: 'What problem does the man mention?', options: { A: 'Some products are damaged.', B: 'Some equipment is out of stock.', C: 'A vehicle has broken down.', D: 'A delivery error has occurred.' }, answer: 'D' }, { id: 42, question: 'What does the woman say is planned for Friday?', options: { A: 'A product launch', B: 'An inspection', C: 'A cooking class', D: 'An interview' }, answer: 'B' }, { id: 43, question: 'What does the man say he will do?', options: { A: 'Transfer a call', B: 'Issue a refund', C: 'Provide a warranty', D: 'Visit a business' }, answer: 'A' }, ] },
        { passage: 'Questions 44-46 refer to the following conversation.', questions: [ { id: 44, question: 'Where do the speakers most likely work?', options: { A: 'At a law office', B: 'At a supermarket', C: 'At a medical clinic', D: 'At a recreation center' }, answer: 'C' }, { id: 45, question: 'What are the speakers mainly discussing?', options: { A: 'A marketing campaign', B: 'A new product', C: 'Some budget cuts', D: 'Some survey results' }, answer: 'D' }, { id: 46, question: 'What does the woman imply when she says, "That would require significant revisions to our scheduling process"?', options: { A: 'She doubts a change will be implemented.', B: 'She thinks more staff should be hired.', C: 'She needs more time to make a decision.', D: 'She believes some data is incorrect.' }, answer: 'A' }, ] },
        { passage: 'Questions 47-49 refer to the following conversation.', questions: [ { id: 47, question: 'Why did the woman miss a meeting?', options: { A: 'She was not feeling well.', B: 'She was on a business trip.', C: 'She was speaking with a client.', D: 'She did not receive the invitation.' }, answer: 'C' }, { id: 48, question: 'What is the woman confused about?', options: { A: 'The details of an assignment', B: 'A reimbursement process', C: 'The terms of a contract', D: 'A travel itinerary' }, answer: 'B' }, { id: 49, question: 'According to the man, what should the woman do?', options: { A: 'Reset the password for her computer', B: 'Talk to the organizer of the meeting', C: 'Consult the electronic version of a document', D: 'Research the history of an account' }, answer: 'C' }, ] },
        { passage: 'Questions 50-52 refer to the following conversation.', questions: [ { id: 50, question: 'What is the woman an expert in?', options: { A: 'Gardening', B: 'Nutrition', C: 'Appliance repair', D: 'Fitness training' }, answer: 'B' }, { id: 51, question: 'What does the woman recommend?', options: { A: 'Substituting ingredients', B: 'Using appropriate tools', C: 'Changing an exercise routine', D: 'Scheduling regular maintenance' }, answer: 'A' }, { id: 52, question: 'According to the woman, where can listeners find more information?', options: { A: 'On a television show', B: 'On a Web site', C: 'In a magazine', D: 'In a book' }, answer: 'B' }, ] },
        { passage: 'Questions 53-55 refer to the following conversation.', questions: [ { id: 53, question: "What does the woman say about the man's job performance?", options: { A: 'He is respected by his colleagues.', B: 'He always meets his deadlines.', C: 'He has good ideas for new projects.', D: 'He has increased company profits.' }, answer: 'A' }, { id: 54, question: 'What does the woman ask the man to do?', options: { A: 'Attend a trade show', B: 'Join a leadership council', C: 'Mentor a colleague', D: 'Accept a new position' }, answer: 'D' }, { id: 55, question: 'When will the speakers meet again?', options: { A: 'Tomorrow', B: 'Next week', C: 'Next month', D: 'Next quarter' }, answer: 'B' }, ] },
        { passage: "Questions 56-58 refer to the following conversation.", questions: [ { id: 56, question: "What does the man ask the women about?", options: { A: "The types of projects assigned", B: "The backgrounds of the applicants", C: "The status of training materials", D: "The location of an orientation" }, answer: 'C' }, { id: 57, question: "What does the man say about last year's internship program?", options: { A: "Some new products were developed.", B: "Some information was unclear.", C: "There were not enough supplies.", D: "There were a large number of applicants." }, answer: 'B' }, { id: 58, question: "What does the man say he is pleased about?", options: { A: "The summer schedule", B: "The careful planning", C: "The deadline extension", D: "The approval process" }, answer: 'B' }, ] },
        { passage: "Questions 59-61 refer to the following conversation.", questions: [ { id: 59, question: "What type of business does the woman work for?", options: { A: "A moving company", B: "A real estate agency", C: "An insurance firm", D: "An equipment rental service" }, answer: 'A' }, { id: 60, question: "What is the woman concerned about?", options: { A: "Shipping delays", B: "New regulations", C: "An increase in competition", D: "A shortage of staff" }, answer: 'C' }, { id: 61, question: "What does the woman emphasize about her company?", options: { A: "The affordable prices", B: "The number of branch offices", C: "The user-friendly Web site", D: "The customer service" }, answer: 'D' }, ] },
        { passage: "Questions 62-64 refer to the following conversation and chart.", graphic: 'https://s4-media1.study4.com/media/tez_media/img/ets_toeic_2019_test_3_ets_toeic_2019_test_3_62_64.png', questions: [ { id: 62, question: "What type of event are the speakers discussing?", options: { A: "A shareholders' meeting", B: "A press conference", C: "A job fair", D: "A product demonstration" }, answer: 'A' }, { id: 63, question: "What problem did the woman experience with one of the restaurants?", options: { A: "An unhelpful staff member", B: "A poorly cooked meal", C: "A billing error", D: "A delivery delay" }, answer: 'D' }, { id: 64, question: "Look at the graphic. How much will the lunch most likely cost?", options: { A: "$1,250", B: "$1,400", C: "$950", D: "$850" }, answer: 'C' }, ] },
        { passage: "Questions 65-67 refer to the following conversation and map.", graphic: 'https://s4-media1.study4.com/media/tez_media/img/ets_toeic_2019_test_3_ets_toeic_2019_test_3_65_67.png', questions: [ { id: 65, question: "Look at the graphic. On which floor will the man meet his friends?", options: { A: "Floor 1", B: "Floor 2", C: "Floor 3", D: "Floor 4" }, answer: 'C' }, { id: 66, question: "What will happen at the museum this summer?", options: { A: "A workshop will be offered.", B: "A special exhibit will open.", C: "Concerts will be held in the garden.", D: "Some galleries will be renovated." }, answer: 'D' }, { id: 67, question: "Why does the woman suggest using the stairs at the back of the museum?", options: { A: "They are nearby.", B: "They offer a good view.", C: "They were recently added.", D: "They are not crowded." }, answer: 'D' }, ] },
        { passage: "Questions 68-70 refer to the following conversation and chart.", graphic: 'https://s4-media1.study4.com/media/tez_media/img/ets_toeic_2019_test_3_ets_toeic_2019_test_3_68_70.png', questions: [ { id: 68, question: "What does the woman want to do?", options: { A: "Make travel arrangements", B: "Revise a budget", C: "Change recruiting tactics", D: "Give a lecture" }, answer: 'C' }, { id: 69, question: "Look at the graphic. Which method does the man suggest using?", options: { A: "University career fairs", B: "Advertising", C: "Employee referrals", D: "Company Web site" }, answer: 'B' }, { id: 70, question: "What does the woman suggest the man do?", options: { A: "Design a questionnaire", B: "Renew a contract", C: "Work with a colleague", D: "Interview a job candidate" }, answer: 'C' }, ] },
    ],
    part4: [
        { passage: 'Questions 71-73 refer to the following announcement.', questions: [ { id: 71, question: 'At which event is the announcement being made?', options: { A: 'A book fair', B: 'A product launch', C: 'A technology conference', D: 'A charity fundraiser' }, answer: 'C' }, { id: 72, question: 'According to the speaker, what can some listeners do tomorrow?', options: { A: 'Go on a tour', B: 'Attend an opening ceremony', C: 'Participate in a focus group', D: 'Win a prize' }, answer: 'A' }, { id: 73, question: 'What are the listeners instructed to do?', options: { A: 'Use an alternate entrance', B: 'Register in advance', C: 'Complete a survey', D: 'Meet at a designated location' }, answer: 'B' }, ] },
        { passage: 'Questions 74-76 refer to the following talk.', questions: [ { id: 74, question: 'What product does Castillo manufacture?', options: { A: 'Jewelry', B: 'Clothing', C: 'Art supplies', D: 'Backpacks' }, answer: 'B' }, { id: 75, question: 'Why does the speaker say, "Just look at the color selection in these samples"?', options: { A: 'To introduce a new manufacturing technique', B: 'To assign a task', C: 'To express disappointment', D: 'To support a decision' }, answer: 'D' }, { id: 76, question: 'What will Hae-Rim do?', options: { A: 'Present financial information', B: 'Share competitor data', C: 'Analyze survey results', D: 'Introduce advertising layouts' }, answer: 'A' }, ] },
        { passage: 'Questions 77-79 refer to the following talk.', questions: [ { id: 77, question: 'Who most likely is the speaker?', options: { A: 'An investment banker', B: 'A city official', C: 'A food scientist', D: 'A restaurant manager' }, answer: 'D' }, { id: 78, question: 'According to the speaker, what will happen next week?', options: { A: 'Some new equipment will be installed.', B: 'A corporate office will relocate.', C: 'New menu items will be available.', D: 'Seasonal employees will begin work.' }, answer: 'C' }, { id: 79, question: 'What does the speaker warn listeners about?', options: { A: 'Preparing orders carefully', B: 'Wearing proper attire', C: 'Recording hours accurately', D: 'Taking inventory daily' }, answer: 'A' }, ] },
        { passage: 'Questions 80-82 refer to the following telephone message.', questions: [ { id: 80, question: 'Why is the speaker calling?', options: { A: 'To register for a training session', B: 'To request help with a project', C: 'To book a meeting room', D: 'To get updated customer information' }, answer: 'B' }, { id: 81, question: 'What does the speaker imply when she says, "it wasn\'t my idea"?', options: { A: 'She knows a change is inconvenient.', B: 'She thinks a colleague deserves credit.', C: 'She would like the listener\'s opinion.', D: 'She is going to explain a new procedure.' }, answer: 'A' }, { id: 82, question: 'What does the speaker ask the listener to do?', options: { A: 'Order business cards', B: 'Check a mailbox', C: 'Revise a report', D: 'Reserve a booth' }, answer: 'D' }, ] },
        { passage: 'Questions 83-85 refer to the following telephone message.', questions: [ { id: 83, question: 'What will the company do beginning on June 1?', options: { A: 'Accept reservations online', B: 'Provide service to a new location', C: 'Offer a customer loyalty program', D: 'Lower its express shipping rates' }, answer: 'B' }, { id: 84, question: 'According to the speaker, what must customers do in order to ship a vehicle?', options: { A: 'Show proof of ownership', B: 'Provide an extra set of keys', C: 'Purchase additional insurance', D: 'Get a mechanical inspection' }, answer: 'A' }, { id: 85, question: 'What does the speaker indicate about the call?', options: { A: 'It will be redirected to a different department.', B: 'It will be answered in the order in which it was received.', C: 'It may be several minutes until a representative answers.', D: 'It may be recorded for future use.' }, answer: 'D' }, ] },
        { passage: 'Questions 86-88 refer to the following talk.', questions: [ { id: 86, question: 'Who is the intended audience for the talk?', options: { A: 'Theater patrons', B: 'Costume makers', C: 'Ticket sellers', D: 'Stage musicians' }, answer: 'B' }, { id: 87, question: 'What does the speaker mention about the play?', options: { A: 'It is very long.', B: 'It is set in the past.', C: 'There are many characters.', D: 'There is a waiting list for tickets.' }, answer: 'C' }, { id: 88, question: 'What will take place in five weeks?', options: { A: 'A photography session', B: 'A dinner reception', C: 'A fashion show', D: 'A dress rehearsal' }, answer: 'D' }, ] },
        { passage: 'Questions 89-91 refer to the following telephone message.', questions: [ { id: 89, question: 'What was the speaker supposed to do this morning?', options: { A: 'Interview a job applicant', B: 'Attend a meeting', C: 'Pick up a client', D: 'Lead a tour group' }, answer: 'B' }, { id: 90, question: 'What transportation problem does the speaker mention?', options: { A: 'A road has been closed.', B: 'A bridge is under construction.', C: 'A train service is unavailable.', D: 'A flight has been delayed.' }, answer: 'C' }, { id: 91, question: 'What does the speaker suggest?', options: { A: 'Inviting other colleagues', B: 'Posting a notice', C: 'Holding a phone conference', D: 'Having lunch together' }, answer: 'D' }, ] },
        { passage: 'Questions 92-94 refer to the following excerpt from a meeting.', questions: [ { id: 92, question: 'What industry does the speaker work in?', options: { A: 'Renewable energy', B: 'Computer technology', C: 'Publishing', D: 'Real estate' }, answer: 'A' }, { id: 93, question: 'What does the speaker imply when he says, "hundreds of businesses have signed up"?', options: { A: 'He is worried about meeting client demands.', B: 'He expects an industry to start changing.', C: 'The listeners should choose his company.', D: 'The listeners will receive a list of contacts.' }, answer: 'C' }, { id: 94, question: 'What will the listeners see in the video?', options: { A: 'A virtual tour', B: 'An award-acceptance speech', C: 'Product features', D: 'Installation instructions' }, answer: 'B' }, ] },
        { passage: "Questions 95-97 refer to the following telephone message and survey.", graphic: 'https://s4-media1.study4.com/media/tez_media/img/ets_toeic_2019_test_3_ets_toeic_2019_test_3_95_97.png', questions: [ { id: 95, question: "Who is the message most likely for?", options: { A: "A fitness instructor", B: "A data analyst", C: "A gym member", D: "A marketing expert" }, answer: 'C' }, { id: 96, question: "What does the speaker say he has e-mailed the listener?", options: { A: "A discount voucher", B: "Driving directions", C: "A fitness magazine", D: "Class schedules" }, answer: 'A' }, { id: 97, question: "Look at the graphic. Which category does the speaker request more information about?", options: { A: "Cleanliness", B: "Location", C: "Staff friendliness", D: "Cost" }, answer: 'C' }, ] },
        { passage: "Questions 98-100 refer to the following talk and logo.", graphic: 'https://s4-media1.study4.com/media/tez_media/img/ets_toeic_2019_test_3_ets_toeic_2019_test_3_98_100.png', questions: [ { id: 98, question: "Where is the talk most likely taking place?", options: { A: "At a business class", B: "At a software training session", C: "At a department meeting", D: "At a client presentation" }, answer: 'A' }, { id: 99, question: "Look at the graphic. Which part of the logo does the speaker discuss first?", options: { A: "The name", B: "The background", C: "The image", D: "The tagline" }, answer: 'D' }, { id: 100, question: "What will the listeners do next?", options: { A: "Break into small groups", B: "Write down some ideas", C: "Read an article", D: "Check a Web site" }, answer: 'B' }, ] },
    ],
    part5: [
        { id: 101, question: "York Development Corporation marked the ------- of the Ford Road office complex with a ribbon-cutting ceremony.", options: { A: 'opens', B: 'opening', C: 'opened', D: 'openly' }, answer: 'B' },
        { id: 102, question: "Staff at the Bismarck Hotel were ------- helpful to us during our stay.", options: { A: 'quite', B: 'enough', C: 'far', D: 'early' }, answer: 'A' },
        { id: 103, question: "Ms. Luo will explain some possible consequences of the ------- merger with the Wilson-Peek Corporation.", options: { A: 'proposed', B: 'proposal', C: 'proposition', D: 'proposing' }, answer: 'A' },
        { id: 104, question: "The Springdale supermarket survey ------- will be released a week after they are evaluated.", options: { A: 'events', B: 'stores', C: 'results', D: 'coupons' }, answer: 'C' },
        { id: 105, question: "The new printer operates more ------- than the previous model did.", options: { A: 'quickest', B: 'quickness', C: 'quick', D: 'quickly' }, answer: 'D' },
        { id: 106, question: "Here at Vanguard Buying Club, ------- help members find quality merchandise at the lowest possible prices.", options: { A: 'us', B: 'our', C: 'we', D: 'ourselves' }, answer: 'C' },
        { id: 107, question: "Management announced that all salespeople would be receiving a bonus this year, ------- in time for summer vacations.", options: { A: 'just', B: 'as', C: 'only', D: 'by' }, answer: 'A' },
        { id: 108, question: "According to Florida Digital Designer Magazine, many graphic designers do not consider ------- to be traditional artists.", options: { A: 'it', B: 'their', C: 'themselves', D: 'itself' }, answer: 'C' },
        { id: 109, question: "A wooden bridge crossing the wading pond ------- to the hotel's nine-hole golf course.", options: { A: 'prepares', B: 'leads', C: 'presents', D: 'takes' }, answer: 'B' },
        { id: 110, question: "A special sale on stationery ------- on the Write Things Web site yesterday.", options: { A: 'was announced', B: 'announced', C: 'was announcing', D: 'to announce' }, answer: 'A' },
        { id: 111, question: "All produce transported by Gocargo Trucking is refrigerated ------- upon pickup to prevent spoilage.", options: { A: 'lately', B: 'promptly', C: 'potentially', D: 'clearly' }, answer: 'B' },
        { id: 112, question: "The Ferrera Museum plans to exhibit a collection of Lucia Almeida's most ------- sculptures.", options: { A: 'innovative', B: 'innovation', C: 'innovatively', D: 'innovate' }, answer: 'A' },
        { id: 113, question: "The bank's cashier windows are open daily from 8:00 A.M. to 4:00 P.M. ------- on Sundays.", options: { A: 'except', B: 'until', C: 'nor', D: 'yet' }, answer: 'A' },
        { id: 114, question: "Inventory control and warehousing strategies ------- within the responsibilities of the supply chain manager.", options: { A: 'have', B: 'cover', C: 'mark', D: 'fall' }, answer: 'D' },
        { id: 115, question: "Of all the truck models available today, it can be difficult to figure out ------- would best suit your company's needs.", options: { A: 'when', B: 'why', C: 'which', D: 'where' }, answer: 'C' },
        { id: 116, question: "CEO Yoshiro Kasai has expressed complete faith in Fairway Maritime's ------- to deliver the product on time.", options: { A: 'belief', B: 'measure', C: 'problem', D: 'ability' }, answer: 'D' },
        { id: 117, question: "At Derwin Securities, trainees alternate ------- attending information sessions and working closely with assigned mentors.", options: { A: 'along', B: 'against', C: 'between', D: 'near' }, answer: 'C' },
        { id: 118, question: "Company Vice President Astrid Barretto had no ------- to being considered for the position of CEO.", options: { A: 'objected', B: 'objecting', C: 'objects', D: 'objection' }, answer: 'D' },
        { id: 119, question: "Belinda McKay fans who are ------- to the author's formal writing style will be surprised by her latest biography.", options: { A: 'fortunate', B: 'readable', C: 'comparable', D: 'accustomed' }, answer: 'D' },
        { id: 120, question: "The Southeast Asia Business Convention will feature ------- known and respected leaders from countries across the region.", options: { A: 'widen', B: 'wider', C: 'widely', D: 'wide' }, answer: 'C' },
        { id: 121, question: "------- the high cost of fuel, customers are buying smaller, more efficient cars.", options: { A: 'Together with', B: 'Instead of', C: 'As well as', D: 'Because of' }, answer: 'D' },
        { id: 122, question: "Over the past ten years, Bellworth Medical Clinic ------- Atlan Protection officers for all security needs.", options: { A: 'is hiring', B: 'were hiring', C: 'has hired', D: 'was hired' }, answer: 'C' },
        { id: 123, question: "The driver will make three ------- to deliver the package before it is returned to our warehouse.", options: { A: 'attempts', B: 'pursuits', C: 'aims', D: 'experiences' }, answer: 'A' },
        { id: 124, question: "We congratulate all Riverside employees, whose ------- effort has resulted in a 20 percent reduction in waste disposal costs.", options: { A: 'collect', B: 'collective', C: 'collects', D: 'collector' }, answer: 'B' },
        { id: 125, question: "Andrzej Ptak's photography Web site will be available online ------- we have finished organizing and cataloging his work.", options: { A: 'how', B: 'once', C: 'so too', D: 'not only' }, answer: 'B' },
        { id: 126, question: "The initial feedback from early buyers of the Sunbell XC2 mobile phone indicates that they found it ------- to use.", options: { A: 'conveniences', B: 'conveniently', C: 'convenience', D: 'convenient' }, answer: 'D' },
        { id: 127, question: "------- space in the bathroom was limited, the contractor managed to fit in two sinks and a shower.", options: { A: 'Both', B: 'So that', C: 'Whether', D: 'Even though' }, answer: 'D' },
        { id: 128, question: "The staff must ------- as much market-research data as possible before planning the advertising campaign.", options: { A: 'equip', B: 'compile', C: 'endorse', D: 'compose' }, answer: 'B' },
        { id: 129, question: "------- a national holiday falls on a Thursday, the Barstow Company allows employees to take off Friday as well.", options: { A: 'Even', B: 'For', C: 'Nearly', D: 'Whenever' }, answer: 'D' },
        { id: 130, question: "------- materials for the advanced Farsi course include an audio CD and a DVD.", options: { A: 'Supplementary', B: 'Consequential', C: 'Persistent', D: 'Cooperative' }, answer: 'A' },
    ],
    part6: [
        { type: 'passage', passageTitle: "Questions 131-134 refer to the following article.", passage: `(3 September)—Five years ago, Brian Trang signed a five-year lease to open his restaurant, Trang's Bistro, at 30 Luray Place. Mr. Trang admits that the first two years of operation were quite ___131___. "We offer spicy food from Vietnam's central region," he explains. "We didn't do well at first ___132___ the cuisine is based on unfamiliar herbs and hot flavors. It took a while to catch on with customers." But Mr. Trang was confident the food would gain in popularity, and he was correct. ___133___. Mr. Trang has just signed another five-year lease, and he is planning ___134___ the space next year.`, questions: [ { id: 131, question: " ", options: { A: 'competitive', B: 'potential', C: 'challenging', D: 'rewarding' }, answer: 'C' }, { id: 132, question: " ", options: { A: 'because', B: 'unless', C: 'despite', D: 'besides' }, answer: 'A' }, { id: 133, question: " ", options: { A: "Originally from Hue, Mr. Trang moved to London at age five with his family.", B: "Reservations at Trang's Bistro must now be made a week in advance.", C: "This situation was not expected to last so long.", D: "The restaurant will relocate in March." }, answer: 'B' }, { id: 134, question: " ", options: { A: 'renovate', B: 'being renovated', C: 'renovates', D: 'to renovate' }, answer: 'D' }, ] },
        { type: 'passage', passageTitle: "Questions 135-138 refer to the following excerpt from a manual.", passage: `This manual provides guidelines for ___135___ inventory control at Malanta facilities. Our advanced manufacturing procedures depend on inventory control. Only by maintaining a precise flow of inventory ___136___ minimize costs and ensure prompt shipments. To achieve this goal, we must avoid shortages. When stock is in the correct location at the time it is ordered, shipments are made at regular shipping costs and within estimated time frames. ___137___. Therefore, the procedures in this manual must always be faithfully ___138___.`, questions: [ { id: 135, question: " ", options: { A: 'accurate', B: 'seasonal', C: 'expensive', D: 'industrialized' }, answer: 'A' }, { id: 136, question: " ", options: { A: 'is able to', B: 'to be able', C: 'our ability to', D: 'are we able to' }, answer: 'D' }, { id: 137, question: " ", options: { A: "We have calculated the costs for you.", B: "Please allow at least two weeks for delivery.", C: "Unfortunately, some items are currently not in stock.", D: "However, this is not possible when unexpected shortages occur." }, answer: 'D' }, { id: 138, question: " ", options: { A: 'implemented', B: 'reproduced', C: 'corrected', D: 'recorded' }, answer: 'A' }, ] },
        { type: 'passage', passageTitle: "Questions 139-142 refer to the following e-mail.", passage: `To: Alan Porto <aporto@silverwing.ky>
From: Tuchman's Billing <billing@tuchmans.ky>
Subject: Autopay
Date: 19 February
Dear Mr. Porto:
Congratulations on your recent ___139___ in Tuchman's Autopay system. Thank you for signing up for this convenient billing system. Your automatic payments will begin with the next billing cycle on 1 March. ___140___. Your statements will come to you electronically and your payment will be deducted from your designated bank account. You may ___141___ the account from which the funds are withdrawn. Simply log in to the My Account section on our Web site https://www.tuchmans.ky, select Autopay, and follow the instructions to enter the alternate account information. Please contact customer service if you have ___142___ using Tuchman's Autopay.
Tuchman's Billing Department`, questions: [ { id: 139, question: " ", options: { A: 'enroll', B: 'enrolled', C: 'enrolls', D: 'enrollment' }, answer: 'D' }, { id: 140, question: " ", options: { A: "Our billing clerks are happy to serve you.", B: "You will no longer receive a bill by post.", C: "We appreciate our loyal customers.", D: "Take advantage of our special offers." }, answer: 'B' }, { id: 141, question: " ", options: { A: 'own', B: 'settle', C: 'open', D: 'change' }, answer: 'D' }, { id: 142, question: " ", options: { A: 'any difficulties', B: 'more difficult', C: 'the difficulty', D: 'too difficult' }, answer: 'A' }, ] },
        { type: 'passage', passageTitle: "Questions 143-146 refer to the following letter.", passage: `12 December
Lenny Howe
222 Easton Boulevard
Port Douglas QLD 4877
Dear Mr. Howe,
The Irwin Neighbourhood Association is proud to ___143___ a summer event called Park Fest, to be held at Fern Park on 10 January, from 1 P.M. to 8 P.M. Park Fest will feature numerous family-friendly activities and a delicious picnic dinner to be served at 6 P.M. A per person fee of ten dollars will be collected. The proceeds will ___144___ go towards a park enhancement project. The plan is to hire a contractor to landscape the park grounds, while a smaller portion will be spent on an advertising campaign. This event ___145___ to be great fun. ___146___.
Regards,
Faye Mason-Jones
Director, Irwin Neighbourhood Association`, questions: [ { id: 143, question: " ", options: { A: 'announce', B: 'admit', C: 'recall', D: 'state' }, answer: 'A' }, { id: 144, question: " ", options: { A: 'entirely', B: 'often', C: 'primarily', D: 'together' }, answer: 'C' }, { id: 145, question: " ", options: { A: 'promise', B: 'promises', C: 'promising', D: 'promised' }, answer: 'B' }, { id: 146, question: " ", options: { A: "You can help by disposing of all rubbish.", B: "The park was established 75 years ago.", C: "We hope you will be able to attend.", D: "Fern Park attracts over 20,000 visitors a year." }, answer: 'C' }, ] },
    ],
    part7: [
        { type: 'passage', passageTitle: "Questions 147-148 refer to the following form.", passage: `Lastico Employee Badge Application Form
To receive a new Lastico employee badge, please fill out the following form.
Write in pen only. Please PRINT clearly.
Name: LAURA CONSTANTINI
Division: CUSTOMER SUPPORT
Employee No.: 2378
Employed at Lastico since: FEB 0
My previous badge was lost.`, questions: [ { id: 147, question: "Why did Ms. Constantini fill out the form?", options: { A: 'To authorize a charge to her credit card', B: 'To be assigned to a new company division', C: 'To request a document renewal', D: 'To report lost equipment' }, answer: 'C' }, { id: 148, question: "What instructions are included?", options: { A: 'Where to send the form', B: 'How to complete the form', C: 'When to submit the application', D: 'What documentation to attach' }, answer: 'B' }, ] },
        { type: 'passage', passageTitle: "Questions 149-150 refer to the following advertisement.", passage: `VACANCY
The Golden Lagoon has been serving Montego Bay for 18 years. We are an award-winning restaurant with a reputation that spans the Caribbean. Currently we have vacancies for the position of waitstaff. Duties include taking customers' orders, serving food and beverages, preparing itemized bills, and accepting payments. Experience is preferred but not required. We offer an excellent hourly rate and flexible work schedule. Apply in person, supplying a résumé and three employment references.
The Golden Lagoon
Shahine Kincaid, Manager
135 Concertina Dr.
Montego Bay, Jamaica
Business hours: Monday—Friday, 11:00 A.M.-11:00 P.M.
Saturday and Sunday, noon-10:00P.M.`, questions: [ { id: 149, question: "What is stated about The Golden Lagoon?", options: { A: 'It is closed on Sundays.', B: 'It regularly has positions available.', C: 'It has been in business for over a decade.', D: 'It was bought by Ms. Kincaid eighteen years ago.' }, answer: 'C' }, { id: 150, question: "What is mentioned about job applicants?", options: { A: 'They will be working on a fixed schedule.', B: 'They must go to the restaurant to file their job request.', C: 'They must have worked in a restaurant before.', D: 'They will learn how to cook Jamaican dishes.' }, answer: 'B' }, ] },
        { type: 'passage', passageTitle: "Questions 151-152 refer to the following e-mail.", passage: `To: All Staff
From: Asta Lindstrom
Subject: Reminder
Date: 11 April
This is a reminder that the water in the Tolliver building will be temporarily shut off tomorrow at 8 a.m. while repairs are completed. I understand that most employees who work in the building will be off-site at a software training session and will not be affected.
For those of you who will be working in Tolliver tomorrow, the Hillcrest Water Department has assured me that the water will be off for no more than four hours. We will provide complimentary bottled water in the lobby for all staff during this time. The cafeteria will remain closed until the water has been turned on again. At that point meal service and food sales will resume. I apologize for the inconvenience.
Sincerely,
Asta Lindstrom
Facilities Manager`, questions: [ { id: 151, question: "What will happen tomorrow?", options: { A: 'New computers will arrive.', B: 'Maintenance work will be done.', C: 'A new employment policy will take effect.', D: 'The location of a training session will be announced.' }, answer: 'B' }, { id: 152, question: "What will employees NOT be able to do in the Tolliver building in the morning?", options: { A: 'Use new software', B: 'Drink bottled water', C: 'Purchase food items', D: 'Walk through the lobby' }, answer: 'C' }, ] },
        { type: 'passage', passageTitle: "Questions 153-154 refer to the following text-message chain.", passage: `Nicole Fernandez [12:23 P.M.]
Tad, this is just to let you know I'll be in Amherst next Monday.
Tad Yates [12:25 P.M.]
What's going on?
Nicole Fernandez [12:26 P.M.]
Our Amherst office requested a training session. Their instructor has to take an unexpected trip, and they need a substitute.
Tad Yates [12:26 P.M.]
Did you manage to book a flight?
Nicole Fernandez [12:27 P.M.]
Not on such short notice. I'll drive.
Tad Yates [12:28 P.M.]
OK, good luck!`, questions: [ { id: 153, question: "What will Ms. Fernandez do next Monday?", options: { A: 'Teach a training course', B: 'Meet an instructor', C: 'Go on a vacation', D: 'Apply for a job' }, answer: 'A' }, { id: 154, question: 'At 12:27 P.M., what does Ms. Fernandez mean when she writes, "Not on such short notice"?', options: { A: 'She will not arrive on time.', B: 'She will not travel by plane.', C: 'She cannot accept an invitation.', D: 'She cannot make a payment.' }, answer: 'B' }, ] },
        { type: 'passage', passageTitle: "Questions 155-157 refer to the following e-mail.", passage: `To: Jake Taera <jtaera@tritmail.com>
From: Natalie Satter <nsatter@coldings.com>
Subject: Information
Date: 30 September
Attachment: Coldings1
Dear Mr. Taera:
Welcome to the Coldings Home Store family! You have been hired as a sales associate. Your training session begins on 8 October at 8:30 A.M. at the Auckland store, 42 Crossbill Road. Please report to Human Resources to begin your orientation as a Coldings Home Store team member. During your first two weeks with our company, you will learn about our team approach and the many benefits of working at Coldings Home Store. You will be working from 8:30 A.M. to 5:00 P.M. After training, you might be assigned to a different work shift and you will be eligible for benefits including flexible days off, sick days, and our employee discount.
Please sign and return the attached document indicating your willingness to accept the position as sales associate. Please let me know if you have any questions or need directions. I look forward to seeing you at the Auckland store on 8 October.
Sincerely,
Natalie Satter
Human Resources Coordinator`, questions: [ { id: 155, question: "What is the purpose of the e-mail?", options: { A: 'To thank an employee', B: 'To provide job information', C: 'To explain a new policy', D: 'To announce a special sales event' }, answer: 'B' }, { id: 156, question: "According to Ms. Satter, what might happen after two weeks?", options: { A: "Mr. Taera's work schedule might change.", B: "Mr. Taera might be transferred to another location.", C: "The company might train Mr. Taera for a new responsibility.", D: "The company might mail Mr. Taera new benefits information." }, answer: 'A' }, { id: 157, question: "What did Ms. Satter send with the e-mail?", options: { A: 'A store map', B: 'An events calendar', C: 'A list of benefits', D: 'An employment agreement' }, answer: 'D' }, ] },
        { type: 'passage', passageTitle: "Questions 158-160 refer to the following press release.", passage: `For immediate release
Contact: Desmond Hawkes, Office of Public Relations
Telephone: (02) 5555 6506
E-mail: dhawkes@carlisle.org.au
New Exhibition at Sydney's Carlisle Art Museum
SYDNEY (3 June)—The Carlisle Art Museum's latest exhibition, Deep Waters, will open on 15 June. The exhibition will feature 38 realist and abstract paintings portraying the beauty and vastness of the world's oceans. All the works were created by Australian artists based in Sydney, and among them will be six by the critically acclaimed oil painter Harold Bernstein.
The exhibition will run until 15 July. Tickets are $10. Museum visitors may view the exhibition between 9 A.M. and 4 P.M. on Tuesdays, Wednesdays, and Thursdays, and between 2 P.M. and 9 P.M. on Fridays and Saturdays. On each day of the exhibition, at least one of the artists will be present and available to answer visitors' questions about the creative process. Mr. Bernstein will be available on 30 June only.
On 23 July, the exhibition will open at the Muriel Art Gallery in Melbourne, where ocean-themed paintings from Melbourne artists will be added to the collection.`, questions: [ { id: 158, question: "What is one purpose of the press release?", options: { A: 'To advertise an upcoming art show', B: 'To publicize paintings available for purchase', C: 'To profile an art gallery owner', D: 'To announce the opening of a new museum' }, answer: 'A' }, { id: 159, question: "Who is Mr. Bernstein?", options: { A: 'An art critic', B: 'A museum director', C: 'A public relations specialist', D: 'An artist' }, answer: 'D' }, { id: 160, question: "What is implied about the exhibition in Melbourne?", options: { A: 'It will be open to the public in the evenings only.', B: 'It will include more paintings than the exhibition in Sydney will.', C: 'It will feature demonstrations of painting techniques by artists.', D: 'It will include paintings of landscapes in addition to paintings of oceans.' }, answer: 'B' }, ] },
        { type: 'passage', passageTitle: "Questions 161-163 refer to the following e-mail.", passage: `To: trosinsky@mailssen.com
From: evaluation@crawfordds.com
Subject: Crawford Design Contest
Date: April 2
Dear Ms. Rosinsky,
Thank you for entering the Crawford Design Studio Awards Contest. Today we received your project titled "Old Rexto Factory Restoration," including a total of nine photographs and an 18-page description file. [1]. Your submission has been forwarded for further processing and has been assigned the entry number P1298. -[2]-
Your project will now be reviewed by a panel of judges, which consists of our in-house experts as well as outside designers. [3] You will be able to check on the status of your entry via the "Submissions Being Processed" link in our Web site's Main Menu.
Should you have any questions, please do not hesitate to call us. - [4].
Kind regards,
Crawford Design Studio`, questions: [ { id: 161, question: "What is the purpose of the e-mail?", options: { A: 'To report missing documents', B: 'To inquire about building costs', C: 'To confirm receipt of materials', D: 'To request additional photographs' }, answer: 'C' }, { id: 162, question: "What is Ms. Rosinsky advised to do online?", options: { A: 'Read the contest rules', B: 'Obtain a map and directions', C: 'Update her contact information', D: 'Track the progress of her submission' }, answer: 'D' }, { id: 163, question: 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? "Please use it when you contact us regarding your entry."', options: { A: '[1]', B: '[2]', C: '[3]', D: '[4]' }, answer: 'B' }, ] },
        { type: 'passage', passageTitle: "Questions 164-167 refer to the following article.", passage: `May 5—Boston law firm Warner and Arnes announced this morning that it is merging with the Philadelphia law firm Hamilton Jones to create Warner, Hamilton, and Associates. With more than 655 attorneys, the merger will make this the largest law firm in the northeastern United States.
"This is a welcome merger of two well-managed firms who share similar corporate cultures and philosophies," said Andrea Warner, codirector of the former Warner and Arnes, who will serve as managing partner of Warner, Hamilton, and Associates. "Our combined expertise makes Warner, Hamilton, and Associates uniquely placed to provide clients even higher levels of counsel and service. We look forward to continuing our practices in Boston and Philadelphia and expect to open yet another office in Hartford within the next twelve months."
According to a press release, Ms. Warner has garnered attention through her representation of clients across the country in prominent cases involving workers' rights, equal pay, and social justice.
The firm expects to keep all of its current lawyers and staff and will "combine management teams made up of partners from each firm to ensure a seamless transition," the release said.`, questions: [ { id: 164, question: "Why was the article written?", options: { A: 'To profile the career of a prominent lawyer', B: 'To promote legal services', C: 'To discuss the joining of two firms', D: 'To announce a firm\'s relocation' }, answer: 'C' }, { id: 165, question: "What does Warner, Hamilton, and Associates plan to do?", options: { A: 'Hire additional lawyers', B: 'Expand to a third city', C: 'Change its leadership', D: 'Close its Philadelphia office' }, answer: 'B' }, { id: 166, question: "What is suggested about Ms. Warner?", options: { A: 'She is based in Hartford.', B: 'She plans to retire soon.', C: 'She sometimes offers free legal counsel.', D: 'She is well-known nationally.' }, answer: 'D' }, { id: 167, question: 'The word "seamless" in paragraph 4, line 4, is closest in meaning to', options: { A: 'in a single piece', B: 'without problems', C: 'in close range', D: 'without hurry' }, answer: 'B' }, ] },
        { type: 'passage', passageTitle: "Questions 168-171 refer to the following e-mail.", passage: `To: maria_bellandini@pweb.net
From: thomas.mclaren@delicatessenmag.com
Date: Tuesday, October 2
Subject: Food Photography Article
Dear Ms. Bellandini:
I have some news regarding your article that is scheduled to be published in the next issue of Delicatessen Magazine. [1]. Yesterday, we learned that a major advertiser canceled their contract with us, and as a result, we will have to reduce the number of pages in our upcoming issue. This is extremely unfortunate, but we just do not have enough money without these ads to publish the magazine in its current format. - [2].
We know that readers have enjoyed reading about your experiences in Italy. [3]. While your eight-page story about working as a food photographer is excellent, in order to fit in the slimmer issue, it will need to be cut by about thirty percent. Although I sincerely hope you agree to having your article published in our upcoming issue, I will understand if you would rather have the article published in full at a later time. However, I have to let you know that the magazine industry is not always the most stable business, and for this reason, I do not know if there will be space for your story in the future. [4]-.
Please let me know as soon as possible what you would like to do. Should you agree to edit the story, I will need the new version by Monday.
Best regards,
Thomas McLaren, Editor-in-Chief`, questions: [ { id: 168, question: "What is implied about Delicatessen Magazine?", options: { A: 'It plans to merge with another magazine.', B: 'It gives discounted subscriptions to staff.', C: 'It relies on advertisements for funding.', D: 'It offers long-term contracts to writers.' }, answer: 'C' }, { id: 169, question: "How would Ms. Bellandini most likely revise her article?", options: { A: 'By making it shorter', B: 'By changing the topic', C: 'By adding more information', D: 'By including more images of food' }, answer: 'A' }, { id: 170, question: "What does Mr. McLaren NOT suggest to Ms. Bellandini?", options: { A: 'Her previous articles were well liked.', B: 'She should submit her article to another magazine.', C: 'Her article might not be published in full at a later date.', D: 'She should notify him of her decision.' }, answer: 'B' }, { id: 171, question: 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? "Of course, this is your choice, and I will respect whatever decision you make."', options: { A: '[1]', B: '[2]', C: '[3]', D: '[4]' }, answer: 'D' }, ] },
        { type: 'passage', passageTitle: "Questions 172-175 refer to the following text-message chain.", passage: `Delroy Gerew (1:29 P.M.):
Hi, Ms. Chichester, we'd like to order another 10 shirts, featuring the company's name, Magnalook, and its logo. We need four small, two medium, and four large sizes. Could you fill the order by Friday?
Nina Chichester (1:32 P.M.):
That's two days from today, so a $75 rush-order fee will be added.
Delroy Gerew (1:34 P.M.):
How can we avoid the fee?
Nina Chichester (1:36 P.M.):
By choosing the standard 5-day production option. Your order would be ready Monday of next week.
Delroy Gerew (1:38 P.M.):
I guess it can't be helped. Since we have employees starting this Friday and you open at 8:00 A.M., can I pick up the shirts at that time?
Nina Chichester (1:39 P.M.):
Pick-up time is normally after 1:00 P.M., but I'll see to it they're ready by 8:00 A.M.
Delroy Gerew (1:41 P.M.):
Thank you. Actually, my assistant will be picking them up.
Nina Chichester (1:42 P.M.):
That's fine. Could you please e-mail me your logo again? The computer on which I had it stored crashed the other day and is awaiting repair.
Delroy Gerew (1:44 P.M.):
Will do. Thanks, and please charge the credit card you have on file for us.`, questions: [ { id: 172, question: "What is suggested about the company Ms. Chichester works for?", options: { A: 'It currently has no large-sized shirts in stock.', B: 'It has filled an order for Mr. Gerew before.', C: 'it offers discounts on large orders.', D: 'It is open every evening.' }, answer: 'B' }, { id: 173, question: "Why is Mr. Gerew ordering new shirts?", options: { A: 'Additional staff members have been hired.', B: 'More were sold than had been anticipated.', C: "The company's logo has been changed.", D: 'The style currently in use has become outdated.' }, answer: 'A' }, { id: 174, question: 'At 1:38 P.M., what does Mr. Gerew mean when he writes, "I guess it can\'t be helped"?', options: { A: 'He will pay a $75 rush-order fee.', B: 'He will ask his assistant to help him.', C: 'He will meet Ms. Chichester at 1:00 P.M.', D: 'He will select the standard production option.' }, answer: 'A' }, { id: 175, question: "What will Mr. Gerew likely do next?", options: { A: 'Provide payment information to Ms. Chichester', B: 'Schedule a meeting with Ms. Chichester', C: 'Send an e-mail to Ms. Chichester', D: "Fix Ms. Chichester's computer" }, answer: 'C' }, ] },
        { type: 'passage', passageTitle: "Questions 176-180 refer to the following e-mail and notice.", passage: `E-Mail Message
To: staffmailinglist @coltonmedical.org
From: Melvin Myers <mmyers@coltonmedical.org>
Date: June 10
Subject: Parking area reassignment
Dear Colleagues:
I just want to remind everyone that crews will begin construction on the new Colton Medical Nutrition Center on June 18.
Effective June 15, parking areas F and G will be closed until August 20, when construction is expected to be completed. Staff currently assigned to park in areas F and G will be given temporary "guest" parking stickers and must park in the guest-parking garage. The Property Maintenance Office will place stickers in staff mailboxes by 4 P.M. today. The sticker should be displayed on the driver's side window of the vehicle.
A construction access road will be created by closing the entrance and exit roads to parking areas F and G. This will also block access to the security building and the pond. However, a temporary alternative entranceway to those locations will be created. To help eliminate excessive traffic, please visit those places only when absolutely necessary. Take note that the Information Center at the main entrance will remain open during construction.
Please e-mail me directly with any questions regarding parking stickers.
Sincerely,
Melvin Myers
Property Maintenance
---
NOTICE
WELCOME TO COLTON MEDICAL CAMPUS INFORMATION CENTER
PLEASE CHECK IN BEFORE PROCEEDING
ATTENTION STAFF:
PARKING AREAS F & G CLOSED UNTIL SEPTEMBER 10
Staff members who normally use these areas and who have not yet received a temporary parking sticker should request one at the security station. A valid access card and staff I.D. are required.
Cars will be immediately towed away if parked next to pedestrian areas, including all walkways, temporary rest areas, and construction tents. Owners of cars parked in the garage without a sticker displayed on the window will be fined $25 per day.
Security officers are available to assist you.`, questions: [ { id: 176, question: "Why are parking areas being closed?", options: { A: 'They are being resurfaced.', B: 'They are being reserved for guests.', C: 'An outdoor event will be held on them.', D: 'A construction project is scheduled to begin.' }, answer: 'D' }, { id: 177, question: "According to the e-mail, who will receive a temporary parking sticker?", options: { A: 'Anyone who is visiting the medical campus', B: 'Anyone who usually parks in areas F and G', C: 'Anyone who usually parks in the parking garage', D: 'Anyone who requests one from the maintenance office' }, answer: 'B' }, { id: 178, question: "Why should staff members limit their visits to the security building?", options: { A: 'So that visitors can enjoy the pond', B: 'So that fewer cars will be in the area', C: 'So that security staff can monitor traffic', D: 'So that visitors can get to the Information Center' }, answer: 'B' }, { id: 179, question: "What changed after the e-mail was sent on June 10?", options: { A: 'Which parking areas are being closed', B: 'Where staff should park their vehicles', C: 'Where parking stickers should be displayed', D: 'How long some parking areas will be closed' }, answer: 'D' }, { id: 180, question: "According to the notice, why might a staff member's car be towed?", options: { A: 'If it is parked near a walkway', B: 'If it is parked in the visitors\' area', C: 'If it does not display a parking sticker', D: 'If it is parked in the garage after August 20' }, answer: 'A' }, ] },
        { type: 'passage', passageTitle: "Questions 181-185 refer to the following survey and e-mail.", passage: `SURVEY
Please take a few minutes to complete this survey about your shopping experience at Woodruff's. Indicate your answer using the 5-point scale to the right of each statement. (1=Strongly Disagree, 5=Strongly Agree)
The store was clean and organized in appearance. 5
There was a wide selection of items in my size. 4
There were dressing rooms available for me to use. 5
The salespeople were courteous and attentive to me. 2
The items were priced well compared to other stores. 3
I am satisfied overall with my experience at Woodruff's. 4
Amount you spent on this purchase: $60
Age: 36-45
Name: Consuela Torres
E-mail: catorres81@aumail.co.au
---
E-Mail Message
From: Customer Service <custserv@woodruff.co.au>
To: Consuela Torres <catorres81@aumail.co.au>
Date: Friday, 27 April 2:40 P.M.
Subject: Survey
Attachment: Voucher
Dear Ms. Torres:
Thank you for taking the time to complete a survey about your recent experience at Woodruff's. We appreciate that so many people took the time to provide us with feedback since it helps us to improve the quality of our service.
We were happy to learn that your overall experience shopping at Woodruff's was a positive one. However, we were sorry to see that you shared one area of dissatisfaction with a significant proportion of the customers who responded to the survey. I want you to know that we are taking the survey results seriously. We plan to improve this area with training soon.
As an apology for our failure to meet high standards in all areas, I have attached a voucher for 15% off a future purchase (good for one year) at any of our three Clarksville locations. We look forward to serving you in the future.
Sincerely,
Marietta Passante`, questions: [ { id: 181, question: "What type of business is Woodruff's?", options: { A: 'A computer software company', B: 'A clothing store', C: 'A mobile-phone service provider', D: 'A consulting firm' }, answer: 'B' }, { id: 182, question: "With what statement about Woodruff's would Ms. Torres most likely agree?", options: { A: 'It is located close to her home.', B: 'It has a large staff.', C: 'It is relatively inexpensive.', D: 'It is open later than other businesses.' }, answer: 'C' }, { id: 183, question: 'In the e-mail, the word "appreciate" in paragraph 1, line 2, is closest in meaning to', options: { A: 'increase', B: 'order', C: 'understand', D: 'value' }, answer: 'D' }, { id: 184, question: "What most likely is Woodruff's planning to do?", options: { A: 'Teach its employees to be more friendly and helpful to customers', B: 'Make the workplace cleaner and more organized', C: 'Open an additional location in Clarksville', D: 'Offer a discount voucher to all customers who complete a survey' }, answer: 'A' }, { id: 185, question: "What is suggested about the survey?", options: { A: 'It has been taken by many customers.', B: 'It was created by Ms. Passante.', C: 'It is accessible on the company Web site.', D: 'It has been in use for one year.' }, answer: 'A' }, ] },
        { type: 'passage', passageTitle: "Questions 186-190 refer to the following invoice and e-mails.", passage: `McGivern Wholesale
Invoice
Ordered By: Deshauna's Creations
Order Date: October 12
Item 14L: 3 m table linens, cream, Qty 4, Price $26.00, Amount $104.00
Item 17P: 25 cm dinner plates, pale blue, Qty 40, Price $4.40, Amount $176.00
Item 18S: 50 cm serving dishes, white, Qty 20, Price $7.95, Amount $159.00
Item 21G: 350 ml water goblets, amber, Qty 40, Price $3.25, Amount $130.00
Subtotal: $569.00, Tax: $73.97, Shipping: $30.00, Total: $672.97
---
E-mail 1
To: Pete McGivern
From: Deshauna Jacques
Subject: October order
Date: October 17
Dear Mr. McGivern,
I received my October order, but there were some errors. I received 20 dinner plates instead of 40, and seven water goblets arrived with cracks in the glass. Have you switched shipping carriers recently?
I have been a loyal customer since you opened five years ago, and never before have I experienced problems with an order. Incidentally, you might like to know that I spoke this morning with Ed Salek, owner of nearby Salek's Café. He mentioned that his last delivery from you had some mistakes too.
How soon can you fix my order? I have three parties coming up next week, so I need these items quickly.
Sincerely,
Deshauna Jacques
---
E-mail 2
To: Deshauna Jacques
From: Pete McGivern
Subject: Re: October order
Date: October 17
Dear Ms. Jacques,
I was very sorry to learn about your order, and about Mr. Salek's as well; I will extend my apology to him today. You are a valued customer, and I am embarrassed that you received such a poor shipment. We are in the middle of moving to a new warehouse, and it has not gone as smoothly as I had hoped. Regardless, I want to make amends as soon as possible. I have put in an order to correct the mistakes, and I hope you will accept a 15 percent discount on your next shipment. Just use code 15D when placing your order.
Please let me know if there is anything else I can do to correct this.
Yours sincerely,
Pete McGivern`, questions: [ { id: 186, question: "Why was the first e-mail sent?", options: { A: 'To ask for customer feedback', B: 'To seek a solution to a problem', C: 'To request a refund on an item', D: 'To cancel an order for tableware' }, answer: 'B' }, { id: 187, question: "What item was received damaged?", options: { A: '14L', B: '17P', C: '18S', D: '21G' }, answer: 'D' }, { id: 188, question: 'In the second e-mail, the word "extend" in paragraph 1, line 1, is closest in meaning to', options: { A: 'offer', B: 'delay', C: 'continue', D: 'increase' }, answer: 'A' }, { id: 189, question: "What is NOT indicated about McGivern Wholesale?", options: { A: 'It does business with restaurants.', B: 'It is changing the location of a facility.', C: 'It has been operating for five years.', D: 'It is revising its price list.' }, answer: 'D' }, { id: 190, question: "What will McGivern Wholesale give to Ms. Jacques?", options: { A: 'A rebate on shipping charges', B: 'An extra package of table linens', C: 'A reduced price on her next order', D: 'An updated invoice' }, answer: 'C' }, ] },
        { type: 'passage', passageTitle: "Questions 191-195 refer to the following form, notice, and e-mail.", passage: `Reddford Construction - Cost Estimate
Date: March 15
Prepared for: Jenny Choi
Description:
Unglazed ceramic floor tiles (400) - $996.00
Premium bright white grout (5 gal) - $164.95
Labor (16 hours @ $35/hr) - $560.00
ESTIMATE TOTAL: $1,720.95
Valid for one month.
---
New Lexington City Ordinance
As of March 30, all construction companies must have a building permit ($100 for residential buildings; $300 for commercial buildings) before beginning a renovation project for each client.
---
E-mail
To: Gabriel Nunez <gnunez@reddfordcon.com>
From: Jenny Choi <jchoi86@citymail.com>
Date: Friday, April 2
Subject: Permits
Dear Mr. Nunez:
I'm writing concerning the job in my dining room that I'd like to contract you for. I'd like work to begin on April 10, but after looking at the estimate you sent me, I have a question about your calculation of the total cost. Specifically, does your estimate take into account any permits that would be needed for the job? A colleague told me that there is an ordinance that went into effect last month requiring building permits for any renovation project. I really liked the job you did installing carpeting and painting in my living room last year, and I would prefer to work with a company that I know. However, I am on a tight budget, so I need to consider the charge for the building permit in the overall cost of the project. Could you please get back to me at your earliest convenience?
Sincerely,
Jenny Choi`, questions: [ { id: 191, question: "On April 10, what work does Ms. Choi want Mr. Nunez to do for her?", options: { A: 'Deliver furniture', B: 'Install tiles', C: 'Clean the living room carpets', D: 'Paint the dining room walls' }, answer: 'B' }, { id: 192, question: "What will happen after April 15?", options: { A: "Ms. Choi's application will be reviewed.", B: 'Ms. Choi will receive a final bill.', C: 'The new city ordinance will go into effect.', D: 'The cost estimate will become invalid.' }, answer: 'D' }, { id: 193, question: "How much will likely be added to Ms. Choi's estimate?", options: { A: '$32.99', B: '$35.00', C: '$100.00', D: '$300.00' }, answer: 'C' }, { id: 194, question: 'In the e-mail, the word "contract" in paragraph 1, line 1, is closest in meaning to', options: { A: 'reduce', B: 'retain', C: 'collect', D: 'purchase' }, answer: 'B' }, { id: 195, question: "What does Ms. Choi indicate about Reddford Construction?", options: { A: 'She has hired them for a job before.', B: 'She needs to reschedule an appointment with them.', C: 'She thinks that their prices are too high.', D: 'She believes that they bought too many tiles.' }, answer: 'A' }, ] },
        { type: 'passage', passageTitle: "Questions 196-200 refer to the following article, e-mail, and text message.", passage: `Cardiff Daily Times
In Brief—20 March
As reported earlier this year, Gold Kettle Grocery is opening an additional regional distribution centre in Cardiff. Construction was postponed for a time because of an unanticipated problem related to the ground conditions on the site. However, the problem has been resolved, and the 40,000-square-metre centre should be fully operational in June. The grand opening is planned for the fourth of June. The warehouse has a special area with state-of-the-art equipment to store foods that need to be kept frozen or cool. The site will also include loading bays and offices.
The distribution centre is expected to create more than 400 new jobs, according to Myles Simler, vice president of operations. Because of the size and scope of the project, a variety of jobs will be needed, from warehouse loaders and drivers to clerical positions.
---
E-mail
To: Myles Simler <msimler@goldkettle.co.uk>
From: Raadhika Baral <rbaral@goldkettle.co.uk>
Subject: Information
Date: 26 June
Attachment: Notification comparison
Dear Myles:
Thanks for giving me a lift to the grand opening earlier this month. I do not believe I have ever seen such a well-planned event. We should send Ping Chen something to show him our appreciation for organising it.
Now that the centre in Cardiff has been open for a few weeks, I think we should consider hiring a company that forwards automatic notifications to employees' mobile phones. Such a service would allow us to get messages to them quickly and also prevent mistakes with shipments. I have a contact who has worked in customer service at Calls For You. I think it's a good company, but Raven Notifications also looks good, and their rates are lower. I have attached information about both companies to help you decide which one we might use. Let me know what you think.
Sincerely,
Raadhika Baral
---
Raven Notifications
11:43 A.M.
To Gold Kettle Employees—The frozen-goods shipment scheduled to arrive on Tuesday will not arrive until Wednesday. Employees who had volunteered to work additional hours on Tuesday night at the Cardiff distribution centre will not be needed. However, we will need additional help for the overnight shift on Wednesday night. If you are interested in working additional hours at that time, please contact Becca Johnston in Human Resources.`, questions: [ { id: 196, question: "What is the purpose of the article?", options: { A: 'To provide an update on a local project', B: 'To discuss state-of-the-art warehouse equipment', C: 'To report on local businesses that plan to hire more workers', D: 'To explain difficulties encountered on a construction project' }, answer: 'A' }, { id: 197, question: 'In the article, the word "scope" in paragraph 2, line 4, is closest in meaning to', options: { A: 'instrument used for viewing', B: 'evaluation', C: 'time of completion', D: 'extent' }, answer: 'D' }, { id: 198, question: "What is most likely true about the Cardiff distribution center?", options: { A: 'It had a problem with food storage.', B: 'Its grand opening was successful.', C: 'Mr. Simler was recently hired there.', D: 'Ms. Baral was unhappy with its service.' }, answer: 'B' }, { id: 199, question: "What company was chosen by Mr. Simler?", options: { A: "The company that Ms. Baral's contact works for", B: "The company with the most reliable customer-service representatives", C: "The company that has lower rates than a competitor", D: "The company with an overnight call center" }, answer: 'C' }, { id: 200, question: "What does the text message ask employees who want additional work to do?", options: { A: 'Arrive on Tuesday night', B: 'Contact the personnel office', C: 'Reply to the message with the hours they can work', D: 'Go to a different distribution center' }, answer: 'B' }, ] },
    ],
};
const explanationsData = {
    //--- PART 5 ---
    101: {
        question: "York Development Corporation marked the ------- of the Ford Road office complex with a ribbon-cutting ceremony.",
        options: { A: 'opens', B: 'opening', C: 'opened', D: 'openly' },
        options_vn: { A: '(động từ) mở', B: '(danh từ) sự khai trương', C: '(quá khứ) đã mở', D: '(trạng từ) một cách cởi mở' },
        answer: 'B',
        type: "Từ loại (Word Form)",
        explanation: "Đây là dạng câu hỏi về từ loại. Sau mạo từ 'the' cần một danh từ. 'Opening' là danh từ có nghĩa là 'việc mở, lễ khánh thành'.",
        translation: "Tập đoàn phát triển York đã đánh dấu việc mở tổ hợp văn phòng Ford Road với một buổi lễ cắt băng khánh thành."
    },
    102: {
        question: "Staff at the Bismarck Hotel were ------- helpful to us during our stay.",
        options: { A: 'quite', B: 'enough', C: 'far', D: 'early' },
        options_vn: { A: 'khá', B: 'đủ', C: 'xa', D: 'sớm' },
        answer: 'A',
        type: "Từ vựng (Vocabulary)",
        explanation: "Cần một từ để bổ nghĩa cho tính từ 'helpful'. 'Quite' (khá) là trạng từ phù hợp. 'Enough' thường đứng sau tính từ/trạng từ, 'far' dùng cho so sánh hơn.",
        translation: "Nhân viên tại khách sạn Bismarck khá nhiệt tình giúp đỡ chúng tôi trong suốt thời gian chúng tôi ở đây."
    },
    103: {
        question: "Ms. Luo will explain some possible consequences of the ------- merger with the Wilson-Peek Corporation.",
        options: { A: 'proposed', B: 'proposal', C: 'proposition', D: 'proposing' },
        options_vn: { A: '(adj) được đề xuất', B: '(n) bản đề xuất', C: '(n) lời đề nghị', D: '(v-ing) đang đề xuất' },
        answer: 'A',
        type: "Từ loại (Word Form)",
        explanation: "Trước danh từ 'merger' (sự sáp nhập), cần một tính từ. 'Proposed' là tính từ dạng bị động mang nghĩa 'được đề xuất', phù hợp với ngữ cảnh.",
        translation: "Bà Luo sẽ giải thích hậu quả có thể xảy ra của việc sáp nhập được đề xuất với Wilson-Peek."
    },
    104: {
        question: "The Springdale supermarket survey ------- will be released a week after they are evaluated.",
        options: { A: 'events', B: 'stores', C: 'results', D: 'coupons' },
        options_vn: { A: 'sự kiện', B: 'cửa hàng', C: 'kết quả', D: 'phiếu giảm giá' },
        answer: 'C',
        type: "Từ vựng (Vocabulary)",
        explanation: "Đây là câu hỏi từ vựng. Cần một từ đi kèm với 'survey' (khảo sát). 'Results' (kết quả) là phù hợp nhất, tạo thành cụm 'survey results' (kết quả khảo sát).",
        translation: "Kết quả cuộc khảo sát siêu thị Springdale sẽ được phát hành một tuần sau khi chúng được đánh giá."
    },
    105: {
        question: "The new printer operates more ------- than the previous model did.",
        options: { A: 'quickest', B: 'quickness', C: 'quick', D: 'quickly' },
        options_vn: { A: 'nhanh nhất', B: '(n) sự nhanh chóng', C: '(adj) nhanh', D: '(adv) một cách nhanh chóng' },
        answer: 'D',
        type: "Từ loại (Word Form)",
        explanation: "Động từ 'operates' (hoạt động) cần được bổ nghĩa bởi một trạng từ. Do đó, 'quickly' là đáp án đúng.",
        translation: "Máy in mới hoạt động nhanh hơn so với mô hình trước."
    },
    106: {
        question: "Here at Vanguard Buying Club, ------- help members find quality merchandise at the lowest possible prices.",
        options: { A: 'us', B: 'our', C: 'we', D: 'ourselves' },
        options_vn: { A: 'chúng tôi (tân ngữ)', B: 'của chúng tôi', C: 'chúng tôi (chủ ngữ)', D: 'bản thân chúng tôi' },
        answer: 'C',
        type: "Đại từ (Pronoun)",
        explanation: "Câu cần một chủ ngữ cho động từ 'help'. Trong các lựa chọn, chỉ có 'we' là đại từ nhân xưng có thể làm chủ ngữ.",
        translation: "Tại câu lạc bộ mua hàng Vanguard, chúng tôi giúp các thành viên tìm thấy các mặt hàng chất lượng với giá thấp nhất có thể."
    },
    107: {
        question: "Management announced that all salespeople would be receiving a bonus this year, ------- in time for summer vacations.",
        options: { A: 'just', B: 'as', C: 'only', D: 'by' },
        options_vn: { A: 'vừa kịp', B: 'như là / vì', C: 'chỉ', D: 'trước / bởi' },
        answer: 'A',
        type: "Từ vựng (Vocabulary)",
        explanation: "Cụm từ 'just in time' có nghĩa là 'vừa kịp lúc', phù hợp nhất với ngữ cảnh của câu.",
        translation: "Ban quản lý thông báo rằng tất cả nhân viên bán hàng sẽ nhận được tiền thưởng trong năm nay, vừa kịp thời gian cho kỳ nghỉ hè."
    },
    108: {
        question: "According to Florida Digital Designer Magazine, many graphic designers do not consider ------- to be traditional artists.",
        options: { A: 'it', B: 'their', C: 'themselves', D: 'itself' },
        options_vn: { A: 'nó', B: 'của họ', C: 'chính họ', D: 'chính nó' },
        answer: 'C',
        type: "Đại từ (Pronoun)",
        explanation: "Đây là câu hỏi về đại từ. 'Themselves' là đại từ phản thân thay thế cho chủ ngữ 'many graphic designers'.",
        translation: "Theo tạp chí thiết kế kỹ thuật số Florida, nhiều nhà thiết kế đồ họa không coi mình là nghệ sĩ truyền thống."
    },
    109: {
        question: "A wooden bridge crossing the wading pond ------- to the hotel's nine-hole golf course.",
        options: { A: 'prepares', B: 'leads', C: 'presents', D: 'takes' },
        options_vn: { A: 'chuẩn bị', B: 'dẫn đến', C: 'trình bày', D: 'lấy đi' },
        answer: 'B',
        type: "Từ vựng (Vocabulary)",
        explanation: "Động từ 'leads (to)' có nghĩa là 'dẫn đến', phù hợp để chỉ con đường từ cây cầu đến sân golf.",
        translation: "Cây cầu gỗ bắc qua ao dẫn đến sân golf chín lỗ của khách sạn."
    },
    110: {
        question: "A special sale on stationery ------- on the Write Things Web site yesterday.",
        options: { A: 'was announced', B: 'announced', C: 'was announcing', D: 'to announce' },
        options_vn: { A: 'đã được thông báo', B: 'đã thông báo', C: 'đang thông báo', D: 'để thông báo' },
        answer: 'A',
        type: "Thì và Dạng của Động từ (Tense and Voice)",
        explanation: "Dấu hiệu 'yesterday' cho thấy đây là thì quá khứ đơn. Chủ ngữ 'A special sale' (một đợt giảm giá) là vật, nên động từ phải ở dạng bị động 'was announced' (đã được công bố).",
        translation: "Một đợt giảm giá đặc biệt trên văn phòng phẩm đã được công bố trên trang Write Things Wed ngày hôm qua."
    },
    111: {
        question: "All produce transported by Gocargo Trucking is refrigerated ------- upon pickup to prevent spoilage.",
        options: { A: 'lately', B: 'promptly', C: 'potentially', D: 'clearly' },
        options_vn: { A: 'gần đây', B: 'kịp thời, ngay lập tức', C: 'có khả năng', D: 'một cách rõ ràng' },
        answer: 'B',
        type: "Từ vựng (Vocabulary)",
        explanation: "'Promptly' có nghĩa là 'kịp thời, ngay lập tức', phù hợp với yêu cầu làm lạnh hàng hóa ngay khi lấy hàng để tránh hư hỏng.",
        translation: "Tất cả sản phẩm được vận chuyển bởi Gocargo Trucking được làm lạnh ngay khi lấy hàng để tránh hư hỏng."
    },
    112: {
        question: "The Ferrera Museum plans to exhibit a collection of Lucia Almeida's most ------- sculptures.",
        options: { A: 'innovative', B: 'innovation', C: 'innovatively', D: 'innovate' },
        options_vn: { A: '(adj) sáng tạo', B: '(n) sự sáng tạo', C: '(adv) một cách sáng tạo', D: '(v) sáng tạo' },
        answer: 'A',
        type: "Từ loại (Word Form)",
        explanation: "Sau trạng từ chỉ mức độ 'most', ta cần một tính từ để bổ nghĩa cho danh từ 'sculptures'. 'Innovative' (sáng tạo, đổi mới) là tính từ phù hợp.",
        translation: "Bảo tàng Ferrera có kế hoạch trưng bày một bộ sưu tập các tác phẩm điêu khắc sáng tạo nhất của Lucia Almeida."
    },
    113: {
        question: "The bank's cashier windows are open daily from 8:00 A.M. to 4:00 P.M. ------- on Sundays.",
        options: { A: 'except', B: 'until', C: 'nor', D: 'yet' },
        options_vn: { A: 'ngoại trừ', B: 'cho đến khi', C: 'cũng không', D: 'chưa / nhưng' },
        answer: 'A',
        type: "Giới từ/Liên từ (Preposition/Conjunction)",
        explanation: "'Except' (ngoại trừ) được dùng để chỉ một trường hợp ngoại lệ so với quy luật chung được nêu trước đó.",
        translation: "Các quầy thu ngân của ngân hàng mở cửa hàng ngày từ 8 giờ sáng đến 4 giờ chiều ngoại trừ vào chủ nhật."
    },
    114: {
        question: "Inventory control and warehousing strategies ------- within the responsibilities of the supply chain manager.",
        options: { A: 'have', B: 'cover', C: 'mark', D: 'fall' },
        options_vn: { A: 'có', B: 'bao gồm', C: 'đánh dấu', D: 'thuộc về' },
        answer: 'D',
        type: "Từ vựng (Vocabulary)",
        explanation: "Cụm từ 'fall within the responsibilities of' có nghĩa là 'thuộc trách nhiệm của', là một cách diễn đạt phổ biến.",
        translation: "Kiểm soát tồn kho và chiến lược kho bãi thuộc trách nhiệm của người quản lý chuỗi cung ứng."
    },
    115: {
        question: "Of all the truck models available today, it can be difficult to figure out ------- would best suit your company's needs.",
        options: { A: 'when', B: 'why', C: 'which', D: 'where' },
        options_vn: { A: 'khi nào', B: 'tại sao', C: 'cái nào', D: 'ở đâu' },
        answer: 'C',
        type: "Mệnh đề danh từ (Noun Clause)",
        explanation: "'Which' được dùng để thay thế cho 'models' (mẫu), giới thiệu một lựa chọn trong một nhóm đã xác định.",
        translation: "Trong số tất cả các mẫu xe hiện nay, có thể khó tìm ra loại nào phù hợp nhất với nhu cầu của công ty bạn."
    },
    116: {
        question: "CEO Yoshiro Kasai has expressed complete faith in Fairway Maritime's ------- to deliver the product on time.",
        options: { A: 'belief', B: 'measure', C: 'problem', D: 'ability' },
        options_vn: { A: 'niềm tin', B: 'biện pháp', C: 'vấn đề', D: 'khả năng' },
        answer: 'D',
        type: "Từ vựng (Vocabulary)",
        explanation: "Sau tính từ sở hữu 'Fairway Maritime's' cần một danh từ. Cấu trúc 'ability to V' (khả năng làm gì đó) là phù hợp nhất.",
        translation: "CEO Yoshiro Kasai đã bày tỏ niềm tin hoàn toàn vào khả năng cung cấp sản phẩm đúng thời hạn của Maritime."
    },
    117: {
        question: "At Derwin Securities, trainees alternate ------- attending information sessions and working closely with assigned mentors.",
        options: { A: 'along', B: 'against', C: 'between', D: 'near' },
        options_vn: { A: 'dọc theo', B: 'chống lại', C: 'giữa', D: 'gần' },
        answer: 'C',
        type: "Giới từ (Preposition)",
        explanation: "Cấu trúc 'alternate between A and B' có nghĩa là 'xen kẽ giữa A và B'.",
        translation: "Tại Derwin thực tập sinh xen kẽ giữa việc tham dự các buổi thông tin và làm việc chặt chẽ với các cố vẫn được phân công."
    },
    118: {
        question: "Company Vice President Astrid Barretto had no ------- to being considered for the position of CEO.",
        options: { A: 'objected', B: 'objecting', C: 'objects', D: 'objection' },
        options_vn: { A: '(v-ed) đã phản đối', B: '(v-ing) đang phản đối', C: '(n) đồ vật / (v) phản đối', D: '(n) sự phản đối' },
        answer: 'D',
        type: "Từ loại (Word Form)",
        explanation: "Sau 'no' cần một danh từ. 'Objection' (sự phản đối) là danh từ phù hợp. Cấu trúc 'have no objection to being...' (không phản đối việc được...).",
        translation: "Phó chủ tịch công ty Astrid Barretto không phản đối việc được xem xét cho vị trí CEO."
    },
    119: {
        question: "Belinda McKay fans who are ------- to the author's formal writing style will be surprised by her latest biography.",
        options: { A: 'fortunate', B: 'readable', C: 'comparable', D: 'accustomed' },
        options_vn: { A: 'may mắn', B: 'dễ đọc', C: 'có thể so sánh', D: 'quen với' },
        answer: 'D',
        type: "Từ vựng (Vocabulary)",
        explanation: "Cấu trúc 'be accustomed to something' có nghĩa là 'quen với việc gì đó'.",
        translation: "Người hâm mộ Belinda McKay đã quen với phong cách viết chính thức của tac giả sec ngậc nhiên bởi tiểu sử mới nhất của cô."
    },
    120: {
        question: "The Southeast Asia Business Convention will feature ------- known and respected leaders from countries across the region.",
        options: { A: 'widen', B: 'wider', C: 'widely', D: 'wide' },
        options_vn: { A: '(v) mở rộng', B: 'rộng hơn', C: '(adv) một cách rộng rãi', D: '(adj) rộng' },
        answer: 'C',
        type: "Từ loại (Word Form)",
        explanation: "Cần một trạng từ ('widely') để bổ nghĩa cho quá khứ phân từ đóng vai trò như tính từ ('known'). Cụm 'widely known' có nghĩa là 'được biết đến rộng rãi'.",
        translation: "Hội nghi kinh doanh Đông Nam Á sẽ có sự góp mặt của các nhà lãnh đạo được biết đến và tôn trọng từ các quốc gia trong khu vực."
    },
    121: {
        question: "------- the high cost of fuel, customers are buying smaller, more efficient cars.",
        options: { A: 'Together with', B: 'Instead of', C: 'As well as', D: 'Because of' },
        options_vn: { A: 'Cùng với', B: 'Thay vì', C: 'Cũng như', D: 'Bởi vì' },
        answer: 'D',
        type: "Giới từ/Liên từ (Preposition/Conjunction)",
        explanation: "Vế sau chỉ kết quả, vế trước chỉ nguyên nhân. 'Because of' (bởi vì) + cụm danh từ là phù hợp nhất để chỉ nguyên nhân.",
        translation: "Vì chi phí nhiên liệu cao, khách hang mua những chiếc xe nhỏ hơn, hiệu quả hơn."
    },
    122: {
        question: "Over the past ten years, Bellworth Medical Clinic ------- Atlan Protection officers for all security needs.",
        options: { A: 'is hiring', B: 'were hiring', C: 'has hired', D: 'was hired' },
        options_vn: { A: 'đang thuê', B: '(qkd) đang thuê', C: 'đã thuê (htd)', D: 'đã được thuê' },
        answer: 'C',
        type: "Thì của Động từ (Verb Tense)",
        explanation: "Cụm từ 'Over the past ten years' (Trong suốt mười năm qua) là dấu hiệu của thì hiện tại hoàn thành.",
        translation: "Trong suốt mười năm qua, phòng khám y tế Bellworth đã thuê nhân viên Atlan bảo vệ cho tất cả các nhu cầu bảo mật."
    },
    123: {
        question: "The driver will make three ------- to deliver the package before it is returned to our warehouse.",
        options: { A: 'attempts', B: 'pursuits', C: 'aims', D: 'experiences' },
        options_vn: { A: 'nỗ lực', B: 'sự theo đuổi', C: 'mục tiêu', D: 'kinh nghiệm' },
        answer: 'A',
        type: "Từ vựng (Vocabulary)",
        explanation: "Cụm từ 'make an attempt' có nghĩa là 'nỗ lực, cố gắng'.",
        translation: "Tài xế sẽ cố gắng đóng gói 3 lần trước khi nó được đưa trở lại nhà kho."
    },
    124: {
        question: "We congratulate all Riverside employees, whose ------- effort has resulted in a 20 percent reduction in waste disposal costs.",
        options: { A: 'collect', B: 'collective', C: 'collects', D: 'collector' },
        options_vn: { A: '(v) thu thập', B: '(adj) tập thể', C: '(v-s) thu thập', D: '(n) người thu thập' },
        answer: 'B',
        type: "Từ loại (Word Form)",
        explanation: "Sau đại từ quan hệ sở hữu 'whose' và trước danh từ 'effort' cần một tính từ. 'Collective' (tập thể) là tính từ phù hợp.",
        translation: "Chúng tôi chúc mừng tất cả các nhân viên của Riverside, những người đã nổ lực giúp giảm 20% chi phí đã xử lí chất thải."
    },
    125: {
        question: "Andrzej Ptak's photography Web site will be available online ------- we have finished organizing and cataloging his work.",
        options: { A: 'how', B: 'once', C: 'so too', D: 'not only' },
        options_vn: { A: 'làm thế nào', B: 'một khi', C: 'cũng vậy', D: 'không chỉ' },
        answer: 'B',
        type: "Giới từ/Liên từ (Preposition/Conjunction)",
        explanation: "'Once' (một khi) được dùng như một liên từ thời gian, có nghĩa tương tự như 'when' hoặc 'as soon as'.",
        translation: "Trang web nhiếp ảnh của Andrzej sẽ có thể dùng trực tuyến được khi chúng tôi đã hoàn thành việc tổ chức và lập danh mục của mình."
    },
    126: {
        question: "The initial feedback from early buyers of the Sunbell XC2 mobile phone indicates that they found it ------- to use.",
        options: { A: 'conveniences', B: 'conveniently', C: 'convenience', D: 'convenient' },
        options_vn: { A: '(n-plural) sự tiện lợi', B: '(adv) một cách tiện lợi', C: '(n) sự tiện lợi', D: '(adj) tiện lợi' },
        answer: 'D',
        type: "Cấu trúc (Structure)",
        explanation: "Sau các động từ như find, make, feel... ta dùng cấu trúc V + O + adj. Vì vậy, sau 'found it' cần một tính từ là 'convenient'.",
        translation: "Phản hồi ban đầu từ những người mua đầu tiên của điện thoại di động Sunbell XC2 cho thấy rằng họ thấy nó thuận tiện khi sử dụng."
    },
    127: {
        question: "------- space in the bathroom was limited, the contractor managed to fit in two sinks and a shower.",
        options: { A: 'Both', B: 'So that', C: 'Whether', D: 'Even though' },
        options_vn: { A: 'Cả hai', B: 'Để mà', C: 'Liệu rằng', D: 'Mặc dù' },
        answer: 'D',
        type: "Giới từ/Liên từ (Preposition/Conjunction)",
        explanation: "'Even though' (mặc dù) là liên từ chỉ sự nhượng bộ, nối hai mệnh đề có ý nghĩa tương phản.",
        translation: "Mặc dù không gian trong phòng tắm bị hạn chế, người thầu quản lí vẫn để vừa hai bồn rửa và một vòi sen."
    },
    128: {
        question: "The staff must ------- as much market-research data as possible before planning the advertising campaign.",
        options: { A: 'equip', B: 'compile', C: 'endorse', D: 'compose' },
        options_vn: { A: 'trang bị', B: 'biên soạn, tổng hợp', C: 'chứng thực', D: 'soạn thảo' },
        answer: 'B',
        type: "Từ vựng (Vocabulary)",
        explanation: "'Compile' có nghĩa là 'biên soạn, tổng hợp', phù hợp với việc thu thập 'dữ liệu nghiên cứu thị trường'.",
        translation: "Nhân viên phải tông hợp càng nhiều dữ liệu nghiên cứu thị trường càng tốt trước khi lên ké hoạch cho chiến dịch quảng cáo."
    },
    129: {
        question: "------- a national holiday falls on a Thursday, the Barstow Company allows employees to take off Friday as well.",
        options: { A: 'Even', B: 'For', C: 'Nearly', D: 'Whenever' },
        options_vn: { A: 'Thậm chí', B: 'Vì / Trong khoảng', C: 'Gần như', D: 'Bất cứ khi nào' },
        answer: 'D',
        type: "Giới từ/Liên từ (Preposition/Conjunction)",
        explanation: "'Whenever' (bất cứ khi nào) dùng để giới thiệu một mệnh đề trạng ngữ chỉ thời gian không xác định, diễn tả một hành động lặp đi lặp lại.",
        translation: "Bất cứ một ngày lễ quốc gia nào rơi vào thứ năm, thì công ty Barstow cũng cho phép nhân viên nghỉ thứ sáu."
    },
    130: {
        question: "------- materials for the advanced Farsi course include an audio CD and a DVD.",
        options: { A: 'Supplementary', B: 'Consequential', C: 'Persistent', D: 'Cooperative' },
        options_vn: { A: 'Bổ sung', B: 'Là hậu quả của', C: 'Kiên trì', D: 'Hợp tác' },
        answer: 'A',
        type: "Từ vựng (Vocabulary)",
        explanation: "'Supplementary materials' là một cụm từ phổ biến có nghĩa là 'tài liệu bổ sung'.",
        translation: "Tài liệu bổ sung cho khóa học Farsi nâng cao bao gồm CD âm thanh và DVD."
    },

    //--- PART 6 ---
    131: {
        question: "Mr. Trang admits that the first two years of operation were quite -------.",
        options: { A: 'competitive', B: 'potential', C: 'challenging', D: 'rewarding' },
        options_vn: { A: 'cạnh tranh', B: 'tiềm năng', C: 'thách thức / khó khăn', D: 'bổ ích, đáng giá' },
        answer: 'C',
        type: "Từ vựng (Vocabulary)",
        explanation: "Vế sau có nói 'we didn't do well at first' (ban đầu chúng tôi không làm tốt), do đó từ 'challenging' (thách thức, khó khăn) là phù hợp nhất.",
        translation: "Ông Trang thừa nhận rằng hai năm đầu hoạt động khá thách thức."
    },
    132: {
        question: "\"We didn't do well at first ------- the cuisine is based on unfamiliar herbs and hot flavors.\"",
        options: { A: 'because', B: 'unless', C: 'despite', D: 'besides' },
        options_vn: { A: 'bởi vì', B: 'trừ khi', C: 'mặc dù', D: 'bên cạnh đó' },
        answer: 'A',
        type: "Liên từ (Conjunction)",
        explanation: "Mệnh đề sau giải thích nguyên nhân cho mệnh đề trước (lý do tại sao không kinh doanh tốt). Do đó, 'because' (vì) là liên từ phù hợp.",
        translation: "Chúng tôi đã không làm tốt lúc đầu vì ẩm thực dựa trên các loại thảo mộc lạ và hương vị nóng."
    },
    133: {
        question: "But Mr. Trang was confident the food would gain in popularity, and he was correct. -------.",
        options: { 
            A: "Originally from Hue, Mr. Trang moved to London at age five with his family.", 
            B: "Reservations at Trang's Bistro must now be made a week in advance.", 
            C: "This situation was not expected to last so long.", 
            D: "The restaurant will relocate in March." 
        },
        options_vn: { 
            A: "Xuất thân từ Huế, anh Trang chuyển đến London năm tuổi cùng gia đình.", 
            B: "Đặt chỗ tại Trang's Bistro phải được đặt trước một tuần.", 
            C: "Tình trạng này không được dự kiến sẽ kéo dài quá lâu.", 
            D: "Nhà hàng sẽ di dời vào tháng ba." 
        },
        answer: 'B',
        type: "Điền câu (Sentence Insertion)",
        explanation: "Vế trước nói rằng ông Trang đã đúng khi tin rằng món ăn sẽ trở nên phổ biến. Câu (B) 'Đặt chỗ tại Trang's Bistro phải được đặt trước một tuần' là minh chứng rõ nhất cho sự thành công và phổ biến đó.",
        translation: "Đặt chỗ tại Trang's Bistro phải được đặt trước một tuần."
    },
    134: {
        question: "Mr. Trang has just signed another five-year lease, and he is planning ------- the space next year.",
        options: { A: 'renovate', B: 'being renovated', C: 'renovates', D: 'to renovate' },
        options_vn: { A: '(v-nguyên mẫu) cải tạo', B: 'đang được cải tạo', C: '(v-s) cải tạo', D: '(to-v) để cải tạo' },
        answer: 'D',
        type: "Từ loại (Word Form)",
        explanation: "Sau cấu trúc 'is planning' cần một động từ nguyên mẫu có 'to' (to-infinitive) để chỉ mục đích hoặc kế hoạch. Do đó, 'to renovate' (để cải tạo) là đáp án đúng.",
        translation: "...và ông đang lên kế hoạch để cải tạo không gian trong năm tới."
    },
    135: {
        question: "Our advanced manufacturing procedures depend on ------- inventory control.",
        options: { A: 'accurate', B: 'seasonal', C: 'expensive', D: 'industrialized' },
        options_vn: { A: 'chính xác', B: 'theo mùa', C: 'đắt đỏ', D: 'được công nghiệp hóa' },
        answer: 'A',
        type: "Từ vựng (Vocabulary)",
        explanation: "Kiểm soát hàng tồn kho cần phải 'chính xác' (accurate) để quy trình sản xuất có thể phụ thuộc vào nó.",
        translation: "Quy trình sản xuất tiên tiến của chúng tôi phụ thuộc vào kiểm soát hàng tồn kho chính xác."
    },
    136: {
        question: "Only by maintaining a precise flow of inventory ------- minimize costs and ensure prompt shipments.",
        options: { A: 'is able to', B: 'to be able', C: 'our ability to', D: 'are we able to' },
        options_vn: { A: 'có thể (đảo ngữ ngôi 3 số ít)', B: 'để có thể', C: 'khả năng của chúng tôi để', D: 'chúng tôi có thể (đảo ngữ)' },
        answer: 'D',
        type: "Đảo ngữ (Inversion)",
        explanation: "Khi các từ phủ định như 'Only' đứng đầu câu thì phải đảo ngữ. Do đó, cấu trúc đúng là 'are we able to' thay vì 'we are able to'.",
        translation: "Chỉ bằng cách duy trì một luồng hàng tồn kho chính xác, chúng ta có thể giảm thiểu chi phí và đảm bảo giao hàng nhanh chóng."
    },
    137: {
        question: "When stock is in the correct location at the time it is ordered, shipments are made at regular shipping costs and within estimated time frames. -------.",
        options: { 
            A: "We have calculated the costs for you.", 
            B: "Please allow at least two weeks for delivery.", 
            C: "Unfortunately, some items are currently not in stock.", 
            D: "However, this is not possible when unexpected shortages occur." 
        },
        options_vn: { 
            A: "Chúng tôi đã tính toán các chi phí cho bạn.", 
            B: "Vui lòng cho phép ít nhất hai tuần để giao hàng.", 
            C: "Thật không may, một số mặt hàng hiện không có trong kho.", 
            D: "Tuy nhiên, điều này là không thể khi xảy ra tình trạng thiếu hụt bất ngờ." 
        },
        answer: 'D',
        type: "Điền câu (Sentence Insertion)",
        explanation: "Câu trước mô tả tình huống lý tưởng. Câu (D) dùng 'However' để đưa ra một sự tương phản, nói về tình huống không thể thực hiện được khi có sự thiếu hụt, tạo ra sự liên kết logic.",
        translation: "Tuy nhiên, điều này là không thể khi xảy ra tình trạng thiếu hụt bất ngờ."
    },
    138: {
        question: "Therefore, the procedures in this manual must always be faithfully -------.",
        options: { A: 'implemented', B: 'reproduced', C: 'corrected', D: 'recorded' },
        options_vn: { A: 'thực hiện', B: 'sao chép', C: 'sửa chữa', D: 'ghi lại' },
        answer: 'A',
        type: "Từ vựng (Vocabulary)",
        explanation: "'Implemented' (thực hiện) phù hợp với 'procedures' (thủ tục, quy trình). Các quy trình cần được thực hiện một cách trung thực.",
        translation: "Do đó, các quy trình trong hướng dẫn này phải luôn được thực hiện một cách trung thành."
    },
    139: {
        question: "Congratulations on your recent ------- in Tuchman's Autopay system.",
        options: { A: 'enroll', B: 'enrolled', C: 'enrolls', D: 'enrollment' },
        options_vn: { A: '(v) đăng ký', B: '(v-ed) đã đăng ký', C: '(v-s) đăng ký', D: '(n) sự đăng ký' },
        answer: 'D',
        type: "Từ loại (Word Form)",
        explanation: "Sau tính từ sở hữu 'your' và tính từ 'recent', cần một danh từ. 'Enrollment' (sự đăng ký) là danh từ phù hợp.",
        translation: "Chúc mừng bạn về việc đăng ký gần đây trong hệ thống Autopay của Tuchman."
    },
    140: {
        question: "Your automatic payments will begin with the next billing cycle on 1 March. -------.",
        options: { 
            A: "Our billing clerks are happy to serve you.", 
            B: "You will no longer receive a bill by post.", 
            C: "We appreciate our loyal customers.", 
            D: "Take advantage of our special offers." 
        },
        options_vn: { 
            A: "Nhân viên thanh toán của chúng tôi rất sẵn lòng phục vụ bạn.", 
            B: "Bạn sẽ không còn nhận được hóa đơn qua đường bưu điện.", 
            C: "Chúng tôi đánh giá cao những khách hàng trung thành của mình.", 
            D: "Hãy tận dụng các ưu đãi đặc biệt của chúng tôi." 
        },
        answer: 'B',
        type: "Điền câu (Sentence Insertion)",
        explanation: "Câu sau nói rằng sao kê sẽ được gửi 'electronically' (bằng điện tử). Do đó, câu (B) 'Bạn sẽ không còn nhận được hóa đơn qua đường bưu điện nữa' là sự bổ sung hợp lý nhất.",
        translation: "Bạn sẽ không còn nhận được hóa đơn qua đường bưu điện nữa."
    },
    141: {
        question: "You may ------- the account from which the funds are withdrawn.",
        options: { A: 'own', B: 'settle', C: 'open', D: 'change' },
        options_vn: { A: 'sở hữu', B: 'giải quyết', C: 'mở', D: 'thay đổi' },
        answer: 'D',
        type: "Từ vựng (Vocabulary)",
        explanation: "Ngữ cảnh đề cập đến việc 'nhập thông tin tài khoản thay thế', vì vậy động từ 'change' (thay đổi) là phù hợp nhất.",
        translation: "Bạn có thể thay đổi tài khoản mà từ đó tiền được rút ra."
    },
    142: {
        question: "Please contact customer service if you have ------- using Tuchman's Autopay.",
        options: { A: 'any difficulties', B: 'more difficult', C: 'the difficulty', D: 'too difficult' },
        options_vn: { A: 'bất kỳ khó khăn nào', B: 'khó khăn hơn', C: 'sự khó khăn (xác định)', D: 'quá khó khăn' },
        answer: 'A',
        type: "Từ loại (Word Form) & Cấu trúc",
        explanation: "Cấu trúc 'have difficulty/difficulties (in) doing something' có nghĩa là 'gặp khó khăn khi làm gì'. Ở đây, 'any difficulties' là phù hợp nhất.",
        translation: "Vui lòng liên hệ dịch vụ khách hàng nếu bạn gặp bất kỳ khó khăn nào khi sử dụng Autopay của Tuchman."
    },
    143: {
        question: "The Irwin Neighbourhood Association is proud to ------- a summer event called Park Fest...",
        options: { A: 'announce', B: 'admit', C: 'recall', D: 'state' },
        options_vn: { A: 'thông báo', B: 'thừa nhận', C: 'nhắc lại', D: 'phát biểu' },
        answer: 'A',
        type: "Từ vựng (Vocabulary)",
        explanation: "Cụm từ 'announce an event' (thông báo một sự kiện) là cách diễn đạt phổ biến và phù hợp nhất với ngữ cảnh.",
        translation: "Hiệp hội khu phố Irwin tự hào thông báo một sự kiện mùa hè có tên Park Fest..."
    },
    144: {
        question: "The proceeds will ------- go towards a park enhancement project.",
        options: { A: 'entirely', B: 'often', C: 'primarily', D: 'together' },
        options_vn: { A: 'hoàn toàn', B: 'thường xuyên', C: 'chủ yếu', D: 'cùng nhau' },
        answer: 'C',
        type: "Từ vựng (Vocabulary)",
        explanation: "'Primarily' có nghĩa là 'chủ yếu, chính yếu'. Câu sau giải thích tiền được chia ra (một phần cho cảnh quan, một phần nhỏ hơn cho quảng cáo), vì vậy 'chủ yếu' là từ hợp lý nhất.",
        translation: "Số tiền thu được sẽ chủ yếu được dùng cho một dự án cải tạo công viên."
    },
    145: {
        question: "This event ------- to be great fun.",
        options: { A: 'promise', B: 'promises', C: 'promising', D: 'promised' },
        options_vn: { A: '(v-nguyên mẫu) hứa hẹn', B: '(v-s) hứa hẹn', C: '(adj) đầy hứa hẹn', D: '(v-ed) đã hứa hẹn' },
        answer: 'B',
        type: "Thì và Sự hòa hợp (Tense & Agreement)",
        explanation: "Chủ ngữ 'This event' là danh từ số ít, do đó động từ ở thì hiện tại đơn phải thêm 's'. 'Promises' (hứa hẹn) là động từ phù hợp.",
        translation: "Sự kiện này hứa hẹn sẽ rất vui."
    },
    146: {
        question: "This event promises to be great fun. -------.",
        options: { 
            A: "You can help by disposing of all rubbish.", 
            B: "The park was established 75 years ago.", 
            C: "We hope you will be able to attend.", 
            D: "Fern Park attracts over 20,000 visitors a year." 
        },
        options_vn: { 
            A: "Bạn có thể giúp đỡ bằng cách vứt bỏ tất cả rác.", 
            B: "Công viên được thành lập 75 năm trước.", 
            C: "Chúng tôi hy vọng bạn sẽ có thể tham dự.", 
            D: "Công viên Fern thu hút hơn 20.000 du khách mỗi năm." 
        },
        answer: 'C',
        type: "Điền câu (Sentence Insertion)",
        explanation: "Sau khi mô tả và quảng bá về sự kiện, câu kết hợp lý nhất là một lời mời hoặc một lời bày tỏ hy vọng người nhận sẽ tham gia. Câu (C) thể hiện điều đó.",
        translation: "Chúng tôi hy vọng bạn sẽ có thể tham dự."
    },

    //--- PART 7 ---
    // (Lưu ý: Phần giải thích Part 7 trong file PDF không đầy đủ, đây là phần tổng hợp dựa trên các chi tiết có sẵn)
    147: {
        question: "Why did Ms. Constantini fill out the form?",
        options: { A: 'To authorize a charge to her credit card', B: 'To be assigned to a new company division', C: 'To request a document renewal', D: 'To report lost equipment' },
        options_vn: { A: 'Để ủy quyền một khoản phí vào thẻ tín dụng của cô ấy', B: 'Để được chỉ định vào một bộ phận mới của công ty', C: 'Để yêu cầu gia hạn/cấp lại tài liệu', D: 'Để báo cáo thiết bị bị mất' },
        answer: 'C',
        type: "Đọc hiểu chi tiết",
        explanation: "Bà Constantini điền vào mẫu đơn để nhận một huy hiệu nhân viên mới vì huy hiệu cũ của bà đã bị mất. Đây là một yêu cầu gia hạn/cấp lại tài liệu (document renewal).",
        translation: "Tại sao bà Constantini điền vào mẫu đơn?"
    },
    148: {
        question: "What instructions are included?",
        options: { A: 'Where to send the form', B: 'How to complete the form', C: 'When to submit the application', D: 'What documentation to attach' },
        options_vn: { A: 'Nơi gửi biểu mẫu', B: 'Cách hoàn thành biểu mẫu', C: 'Khi nào nộp đơn', D: 'Tài liệu nào cần đính kèm' },
        answer: 'B',
        type: "Đọc hiểu chi tiết",
        explanation: "Bài đọc có các hướng dẫn như 'Write in pen only' (Chỉ viết bằng bút mực) và 'Please PRINT clearly' (Vui lòng VIẾT IN HOA rõ ràng), đây là những hướng dẫn về cách hoàn thành biểu mẫu.",
        translation: "Những hướng dẫn nào được bao gồm?"
    },
    149: {
        question: "What is stated about The Golden Lagoon?",
        options: { A: 'It is closed on Sundays.', B: 'It regularly has positions available.', C: 'It has been in business for over a decade.', D: 'It was bought by Ms. Kincaid eighteen years ago.' },
        options_vn: { A: 'Nó đóng cửa vào Chủ nhật.', B: 'Nó thường xuyên có vị trí tuyển dụng.', C: 'Nó đã kinh doanh hơn một thập kỷ.', D: 'Nó được bà Kincaid mua lại mười tám năm trước.' },
        answer: 'C',
        type: "Đọc hiểu chi tiết",
        explanation: "Bài quảng cáo nói rằng nhà hàng 'has been serving Montego Bay for 18 years', tức là đã hoạt động 18 năm, nghĩa là 'hơn một thập kỷ' (over a decade).",
        translation: "Điều gì được nêu về The Golden Lagoon?"
    },
    150: {
        question: "What is mentioned about job applicants?",
        options: { A: 'They will be working on a fixed schedule.', B: 'They must go to the restaurant to file their job request.', C: 'They must have worked in a restaurant before.', D: 'They will learn how to cook Jamaican dishes.' },
        options_vn: { A: 'Họ sẽ làm việc theo một lịch trình cố định.', B: 'Họ phải đến nhà hàng để nộp đơn xin việc.', C: 'Họ phải đã từng làm việc trong một nhà hàng trước đây.', D: 'Họ sẽ học cách nấu các món ăn Jamaica.' },
        answer: 'B',
        type: "Đọc hiểu chi tiết",
        explanation: "Bài quảng cáo yêu cầu ứng viên 'Apply in person', có nghĩa là 'Nộp đơn trực tiếp', tức là họ phải đến nhà hàng để nộp hồ sơ.",
        translation: "Điều gì được đề cập về ứng viên xin việc?"
    },
    151: {
        question: "What will happen tomorrow?",
        options: { A: 'New computers will arrive.', B: 'Maintenance work will be done.', C: 'A new employment policy will take effect.', D: 'The location of a training session will be announced.' },
        options_vn: { A: 'Máy tính mới sẽ đến.', B: 'Công việc bảo trì sẽ được thực hiện.', C: 'Một chính sách tuyển dụng mới sẽ có hiệu lực.', D: 'Địa điểm của một buổi đào tạo sẽ được công bố.' },
        answer: 'B',
        type: "Đọc hiểu chi tiết",
        explanation: "Email thông báo rằng 'the water in the Tolliver building will be temporarily shut off tomorrow while repairs are completed', tức là sẽ có công việc bảo trì (maintenance work) được thực hiện.",
        translation: "Điều gì sẽ xảy ra vào ngày mai?"
    },
    152: {
        question: "What will employees NOT be able to do in the Tolliver building in the morning?",
        options: { A: 'Use new software', B: 'Drink bottled water', C: 'Purchase food items', D: 'Walk through the lobby' },
        options_vn: { A: 'Sử dụng phần mềm mới', B: 'Uống nước đóng chai', C: 'Mua các mặt hàng thực phẩm', D: 'Đi qua sảnh' },
        answer: 'C',
        type: "Đọc hiểu chi tiết",
        explanation: "Email nói rằng 'The cafeteria will remain closed until the water has been turned on again', nghĩa là nhân viên sẽ không thể mua đồ ăn (purchase food items) vào buổi sáng.",
        translation: "Nhân viên sẽ KHÔNG thể làm gì trong tòa nhà Tolliver vào buổi sáng?"
    },
    153: {
        question: "What will Ms. Fernandez do next Monday?",
        options: { A: 'Teach a training course', B: 'Meet an instructor', C: 'Go on a vacation', D: 'Apply for a job' },
        options_vn: { A: 'Dạy một khóa đào tạo', B: 'Gặp một giảng viên', C: 'Đi nghỉ mát', D: 'Xin việc' },
        answer: 'A',
        type: "Đọc hiểu chi tiết",
        explanation: "Nicole nói rằng văn phòng Amherst 'requested a training session' và cô ấy là 'a substitute' (người thay thế) cho giảng viên. Do đó, cô ấy sẽ dạy một khóa đào tạo.",
        translation: "Bà Fernandez sẽ làm gì vào thứ Hai tới?"
    },
    154: {
        question: "At 12:27 P.M., what does Ms. Fernandez mean when she writes, 'Not on such short notice'?",
        options: { A: 'She will not arrive on time.', B: 'She will not travel by plane.', C: 'She cannot accept an invitation.', D: 'She cannot make a payment.' },
        options_vn: { A: 'Cô ấy sẽ không đến đúng giờ.', B: 'Cô ấy sẽ không đi bằng máy bay.', C: 'Cô ấy không thể chấp nhận lời mời.', D: 'Cô ấy không thể thực hiện thanh toán.' },
        answer: 'B',
        type: "Suy luận",
        explanation: "Câu hỏi trước đó của Tad là 'Did you manage to book a flight?' (Bạn đã đặt được vé máy bay chưa?). Câu trả lời 'Not on such short notice' (Không được vì quá gấp) ngụ ý rằng cô ấy không thể đi bằng máy bay.",
        translation: "Vào lúc 12:27 trưa, bà Fernandez có ý gì khi viết, 'Không được vì quá gấp'?"
    },
    155: {
        question: "What is the purpose of the e-mail?",
        options: { A: 'To thank an employee', B: 'To provide job information', C: 'To explain a new policy', D: 'To announce a special sales event' },
        options_vn: { A: 'Để cảm ơn một nhân viên', B: 'Để cung cấp thông tin công việc', C: 'Để giải thích một chính sách mới', D: 'Để thông báo một sự kiện bán hàng đặc biệt' },
        answer: 'B',
        type: "Đọc hiểu mục đích chính",
        explanation: "Email này chứa các thông tin chào mừng nhân viên mới, thông báo về buổi đào tạo, lịch làm việc, và các quyền lợi. Do đó, mục đích chính là để cung cấp thông tin công việc.",
        translation: "Mục đích của email là gì?"
    },
    156: {
        question: "According to Ms. Satter, what might happen after two weeks?",
        options: { A: "Mr. Taera's work schedule might change.", B: "Mr. Taera might be transferred to another location.", C: "The company might train Mr. Taera for a new responsibility.", D: "The company might mail Mr. Taera new benefits information." },
        options_vn: { A: "Lịch làm việc của ông Taera có thể thay đổi.", B: "Ông Taera có thể được chuyển đến một địa điểm khác.", C: "Công ty có thể đào tạo ông Taera cho một trách nhiệm mới.", D: "Công ty có thể gửi cho ông Taera thông tin về các quyền lợi mới." },
        answer: 'A',
        type: "Đọc hiểu chi tiết",
        explanation: "Email nêu rõ: 'After training, you might be assigned to a different work shift', có nghĩa là lịch làm việc của ông Taera có thể thay đổi.",
        translation: "Theo bà Satter, điều gì có thể xảy ra sau hai tuần?"
    },
    157: {
        question: "What did Ms. Satter send with the e-mail?",
        options: { A: 'A store map', B: 'An events calendar', C: 'A list of benefits', D: 'An employment agreement' },
        options_vn: { A: 'Một bản đồ cửa hàng', B: 'Một lịch sự kiện', C: 'Một danh sách các quyền lợi', D: 'Một thỏa thuận lao động' },
        answer: 'D',
        type: "Đọc hiểu chi tiết",
        explanation: "Email yêu cầu ông Taera 'Please sign and return the attached document indicating your willingness to accept the position...'. Đây chính là một thỏa thuận/hợp đồng lao động (employment agreement).",
        translation: "Bà Satter đã gửi gì kèm theo email?"
    },
    158: {
        question: "What is one purpose of the press release?",
        options: { A: 'To advertise an upcoming art show', B: 'To publicize paintings available for purchase', C: 'To profile an art gallery owner', D: 'To announce the opening of a new museum' },
        options_vn: { A: 'Để quảng cáo một buổi triển lãm nghệ thuật sắp tới', B: 'Để công bố các bức tranh có sẵn để mua', C: 'Để giới thiệu hồ sơ một chủ phòng trưng bày nghệ thuật', D: 'Để thông báo việc mở một bảo tàng mới' },
        answer: 'A',
        type: "Đọc hiểu mục đích chính",
        explanation: "Thông cáo báo chí này thông báo về 'New Exhibition' (Triển lãm mới) tên là Deep Waters, sẽ khai mạc vào ngày 15 tháng 6. Mục đích là để quảng cáo cho buổi triển lãm nghệ thuật sắp tới.",
        translation: "Một trong những mục đích của thông cáo báo chí này là gì?"
    },
    159: {
        question: "Who is Mr. Bernstein?",
        options: { A: 'An art critic', B: 'A museum director', C: 'A public relations specialist', D: 'An artist' },
        options_vn: { A: 'Một nhà phê bình nghệ thuật', B: 'Một giám đốc bảo tàng', C: 'Một chuyên gia quan hệ công chúng', D: 'Một nghệ sĩ' },
        answer: 'D',
        type: "Đọc hiểu chi tiết",
        explanation: "Bài viết mô tả ông Harold Bernstein là một 'critically acclaimed oil painter', tức là một họa sĩ sơn dầu. Vậy ông là một nghệ sĩ (artist).",
        translation: "Ông Bernstein là ai?"
    },
    160: {
        question: "What is implied about the exhibition in Melbourne?",
        options: { A: 'It will be open to the public in the evenings only.', B: 'It will include more paintings than the exhibition in Sydney will.', C: 'It will feature demonstrations of painting techniques by artists.', D: 'It will include paintings of landscapes in addition to paintings of oceans.' },
        options_vn: { A: 'Nó sẽ chỉ mở cửa cho công chúng vào buổi tối.', B: 'Nó sẽ bao gồm nhiều bức tranh hơn triển lãm ở Sydney.', C: 'Nó sẽ có các buổi trình diễn kỹ thuật vẽ của các nghệ sĩ.', D: 'Nó sẽ bao gồm các bức tranh phong cảnh ngoài các bức tranh về đại dương.' },
        answer: 'B',
        type: "Suy luận",
        explanation: "Bài viết nói rằng triển lãm ở Melbourne sẽ có thêm 'ocean-themed paintings from Melbourne artists will be added to the collection'. Điều này ngụ ý rằng tổng số bức tranh ở Melbourne sẽ nhiều hơn ở Sydney.",
        translation: "Điều gì được ngụ ý về triển lãm ở Melbourne?"
    },
    161: {
        question: "What is the purpose of the e-mail?",
        options: { A: 'To report missing documents', B: 'To inquire about building costs', C: 'To confirm receipt of materials', D: 'To request additional photographs' },
        options_vn: { A: 'Để báo cáo tài liệu bị thiếu', B: 'Để hỏi về chi phí xây dựng', C: 'Để xác nhận đã nhận tài liệu', D: 'Để yêu cầu thêm ảnh' },
        answer: 'C',
        type: "Đọc hiểu mục đích chính",
        explanation: "Email bắt đầu bằng 'Thank you for entering...' và câu 'Today we received your project...'. Điều này cho thấy mục đích chính là để xác nhận đã nhận được tài liệu dự thi.",
        translation: "Mục đích của email là gì?"
    },
    162: {
        question: "What is Ms. Rosinsky advised to do online?",
        options: { A: 'Read the contest rules', B: 'Obtain a map and directions', C: 'Update her contact information', D: 'Track the progress of her submission' },
        options_vn: { A: 'Đọc quy tắc cuộc thi', B: 'Lấy bản đồ và chỉ đường', C: 'Cập nhật thông tin liên lạc của cô ấy', D: 'Theo dõi tiến trình bài dự thi của cô ấy' },
        answer: 'D',
        type: "Đọc hiểu chi tiết",
        explanation: "Email hướng dẫn: 'You will be able to check on the status of your entry via the \"Submissions Being Processed\" link in our Web site...'. Điều này có nghĩa là cô ấy có thể theo dõi tiến trình bài dự thi của mình.",
        translation: "Bà Rosinsky được khuyên nên làm gì trực tuyến?"
    },
    163: {
        question: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? \"Please use it when you contact us regarding your entry.\"",
        options: { A: '[1]', B: '[2]', C: '[3]', D: '[4]' },
        options_vn: { A: '[1]', B: '[2]', C: '[3]', D: '[4]' },
        answer: 'B',
        type: "Điền câu (Sentence Insertion)",
        explanation: "Câu cần điền nói về việc 'sử dụng nó (it)' khi liên lạc. 'Nó' ở đây chính là mã số 'entry number P1298' được đề cập ngay trước vị trí [2]. Do đó, vị trí [2] là hợp lý nhất.",
        translation: "Câu sau đây phù hợp nhất với vị trí nào được đánh dấu [1], [2], [3], và [4]? \"Vui lòng sử dụng nó khi bạn liên hệ với chúng tôi về bài dự thi của bạn.\""
    },
    164: {
        question: "Why was the article written?",
        options: { A: 'To profile the career of a prominent lawyer', B: 'To promote legal services', C: 'To discuss the joining of two firms', D: "To announce a firm's relocation" },
        options_vn: { A: 'Để giới thiệu sự nghiệp của một luật sư nổi tiếng', B: 'Để quảng bá dịch vụ pháp lý', C: 'Để thảo luận về việc hợp nhất hai công ty', D: 'Để thông báo việc di dời của một công ty' },
        answer: 'C',
        type: "Đọc hiểu mục đích chính",
        explanation: "Bài báo thông báo rằng công ty luật Warner and Arnes đang 'merging with' (sáp nhập với) công ty luật Hamilton Jones. Do đó, mục đích là để thảo luận về việc hợp nhất hai công ty.",
        translation: "Tại sao bài báo này được viết?"
    },
    165: {
        question: "What does Warner, Hamilton, and Associates plan to do?",
        options: { A: 'Hire additional lawyers', B: 'Expand to a third city', C: 'Change its leadership', D: 'Close its Philadelphia office' },
        options_vn: { A: 'Thuê thêm luật sư', B: 'Mở rộng sang thành phố thứ ba', C: 'Thay đổi ban lãnh đạo', D: 'Đóng cửa văn phòng ở Philadelphia' },
        answer: 'B',
        type: "Đọc hiểu chi tiết",
        explanation: "Bài báo trích lời bà Warner: '...expect to open yet another office in Hartford within the next twelve months.' Hartford sẽ là thành phố thứ ba sau Boston và Philadelphia. Do đó, họ có kế hoạch mở rộng sang thành phố thứ ba.",
        translation: "Warner, Hamilton, and Associates có kế hoạch làm gì?"
    },
    166: {
        question: "What is suggested about Ms. Warner?",
        options: { A: 'She is based in Hartford.', B: 'She plans to retire soon.', C: 'She sometimes offers free legal counsel.', D: 'She is well-known nationally.' },
        options_vn: { A: 'Bà ấy làm việc tại Hartford.', B: 'Bà ấy dự định nghỉ hưu sớm.', C: 'Bà ấy thỉnh thoảng tư vấn pháp lý miễn phí.', D: 'Bà ấy nổi tiếng toàn quốc.' },
        answer: 'D',
        type: "Suy luận",
        explanation: "Bài báo nói rằng bà Warner đã thu hút sự chú ý 'through her representation of clients across the country in prominent cases...'. Điều này cho thấy bà nổi tiếng trên toàn quốc.",
        translation: "Điều gì được gợi ý về bà Warner?"
    },
    167: {
        question: "The word 'seamless' in paragraph 4, line 4, is closest in meaning to",
        options: { A: 'in a single piece', B: 'without problems', C: 'in close range', D: 'without hurry' },
        options_vn: { A: 'trong một khối duy nhất', B: 'không có vấn đề', C: 'ở cự ly gần', D: 'không vội vàng' },
        answer: 'B',
        type: "Từ vựng (Vocabulary)",
        explanation: "'Seamless transition' có nghĩa là một sự chuyển đổi liền mạch, suôn sẻ, không gặp vấn đề. Do đó, 'without problems' là từ đồng nghĩa gần nhất.",
        translation: "Từ 'seamless' trong đoạn 4, dòng 4, gần nghĩa nhất với"
    },
    168: {
        question: "What is implied about Delicatessen Magazine?",
        options: { A: 'It plans to merge with another magazine.', B: 'It gives discounted subscriptions to staff.', C: 'It relies on advertisements for funding.', D: 'It offers long-term contracts to writers.' },
        options_vn: { A: 'Nó dự định sáp nhập với một tạp chí khác.', B: 'Nó giảm giá đăng ký cho nhân viên.', C: 'Nó dựa vào quảng cáo để có kinh phí.', D: 'Nó cung cấp hợp đồng dài hạn cho các nhà văn.' },
        answer: 'C',
        type: "Suy luận",
        explanation: "Email nói rằng 'a major advertiser canceled their contract' và kết quả là họ 'will have to reduce the number of pages' vì 'do not have enough money without these ads'. Điều này ngụ ý rằng tạp chí phụ thuộc vào quảng cáo để có kinh phí.",
        translation: "Điều gì được ngụ ý về Tạp chí Delicatessen?"
    },
    169: {
        question: "How would Ms. Bellandini most likely revise her article?",
        options: { A: 'By making it shorter', B: 'By changing the topic', C: 'By adding more information', D: 'By including more images of food' },
        options_vn: { A: 'Bằng cách làm cho nó ngắn hơn', B: 'Bằng cách thay đổi chủ đề', C: 'Bằng cách thêm thông tin', D: 'Bằng cách bao gồm nhiều hình ảnh về thực phẩm' },
        answer: 'A',
        type: "Đọc hiểu chi tiết",
        explanation: "Ông McLaren nói rằng bài viết của bà 'will need to be cut by about thirty percent' để vừa với số báo mỏng hơn. Do đó, bà sẽ phải sửa lại bài viết bằng cách làm cho nó ngắn hơn.",
        translation: "Bà Bellandini có khả năng sẽ sửa lại bài viết của mình như thế nào?"
    },
    170: {
        question: "What does Mr. McLaren NOT suggest to Ms. Bellandini?",
        options: { A: 'Her previous articles were well liked.', B: 'She should submit her article to another magazine.', C: 'Her article might not be published in full at a later date.', D: 'She should notify him of her decision.' },
        options_vn: { A: 'Các bài viết trước của cô ấy đã được yêu thích.', B: 'Cô ấy nên nộp bài viết của mình cho một tạp chí khác.', C: 'Bài viết của cô ấy có thể không được xuất bản đầy đủ vào một ngày sau đó.', D: 'Cô ấy nên thông báo cho anh ấy về quyết định của mình.' },
        answer: 'B',
        type: "Đọc hiểu chi tiết (Loại trừ)",
        explanation: "Ông McLaren có nói về các bài viết trước của bà (A), khả năng bài viết không được xuất bản sau này (C), và yêu cầu bà cho biết quyết định (D). Ông không hề đề nghị bà gửi bài viết cho một tạp chí khác.",
        translation: "Ông McLaren KHÔNG đề nghị điều gì với bà Bellandini?"
    },
    171: {
        question: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? \"Of course, this is your choice, and I will respect whatever decision you make.\"",
        options: { A: '[1]', B: '[2]', C: '[3]', D: '[4]' },
        options_vn: { A: '[1]', B: '[2]', C: '[3]', D: '[4]' },
        answer: 'D',
        type: "Điền câu (Sentence Insertion)",
        explanation: "Câu này thể hiện sự tôn trọng quyết định của bà Bellandini. Nó nên được đặt sau khi ông McLaren đã trình bày tất cả các lựa chọn và rủi ro, ngay trước khi yêu cầu bà cho biết quyết định cuối cùng. Vị trí [4] là hợp lý nhất.",
        translation: "Câu sau đây phù hợp nhất với vị trí nào được đánh dấu [1], [2], [3], và [4]? \"Tất nhiên, đây là sự lựa chọn của bạn, và tôi sẽ tôn trọng bất kỳ quyết định nào bạn đưa ra.\""
    },
    172: {
        question: "What is suggested about the company Ms. Chichester works for?",
        options: { A: 'It currently has no large-sized shirts in stock.', B: 'It has filled an order for Mr. Gerew before.', C: 'it offers discounts on large orders.', D: 'It is open every evening.' },
        options_vn: { A: 'Nó hiện không có áo cỡ lớn trong kho.', B: 'Nó đã hoàn thành một đơn hàng cho ông Gerew trước đây.', C: 'Nó giảm giá cho các đơn hàng lớn.', D: 'Nó mở cửa vào mỗi buổi tối.' },
        answer: 'B',
        type: "Suy luận",
        explanation: "Ông Gerew nói 'order another 10 shirts' (đặt thêm 10 áo) và bà Chichester nói 'please charge the credit card you have on file for us' (vui lòng tính phí vào thẻ tín dụng bạn đã lưu cho chúng tôi). Điều này cho thấy họ đã từng giao dịch trước đây.",
        translation: "Điều gì được gợi ý về công ty mà bà Chichester làm việc?"
    },
    173: {
        question: "Why is Mr. Gerew ordering new shirts?",
        options: { A: 'Additional staff members have been hired.', B: 'More were sold than had been anticipated.', C: "The company's logo has been changed.", D: 'The style currently in use has become outdated.' },
        options_vn: { A: 'Các nhân viên mới đã được tuyển dụng.', B: 'Nhiều áo đã được bán hơn dự kiến.', C: 'Logo của công ty đã được thay đổi.', D: 'Kiểu dáng hiện tại đã trở nên lỗi thời.' },
        answer: 'A',
        type: "Suy luận",
        explanation: "Ông Gerew nói 'we have employees starting this Friday' (chúng tôi có nhân viên bắt đầu làm việc vào thứ Sáu này). Đây là lý do ông cần áo gấp cho nhân viên mới.",
        translation: "Tại sao ông Gerew lại đặt áo mới?"
    },
    174: {
        question: "At 1:38 P.M., what does Mr. Gerew mean when he writes, \"I guess it can't be helped\"?",
        options: { A: 'He will pay a $75 rush-order fee.', B: 'He will ask his assistant to help him.', C: 'He will meet Ms. Chichester at 1:00 P.M.', D: 'He will select the standard production option.' },
        options_vn: { A: 'Ông ấy sẽ trả phí đặt hàng gấp 75 đô la.', B: 'Ông ấy sẽ nhờ trợ lý giúp đỡ.', C: 'Ông ấy sẽ gặp bà Chichester lúc 1:00 chiều.', D: 'Ông ấy sẽ chọn phương án sản xuất tiêu chuẩn.' },
        answer: 'A',
        type: "Suy luận",
        explanation: "Câu này được nói sau khi bà Chichester đề cập đến phí đặt hàng gấp $75 và lựa chọn thay thế (nhận hàng vào tuần sau). Vì ông cần áo vào thứ Sáu, ông chấp nhận không thể tránh được phí gấp, tức là ông sẽ trả phí đó.",
        translation: "Vào lúc 1:38 chiều, ông Gerew có ý gì khi viết, \"Tôi đoán là không thể khác được\"?"
    },
    175: {
        question: "What will Mr. Gerew likely do next?",
        options: { A: 'Provide payment information to Ms. Chichester', B: 'Schedule a meeting with Ms. Chichester', C: 'Send an e-mail to Ms. Chichester', D: "Fix Ms. Chichester's computer" },
        options_vn: { A: 'Cung cấp thông tin thanh toán cho bà Chichester', B: 'Lên lịch một cuộc họp với bà Chichester', C: 'Gửi một email cho bà Chichester', D: 'Sửa máy tính của bà Chichester' },
        answer: 'C',
        type: "Đọc hiểu chi tiết",
        explanation: "Bà Chichester đã yêu cầu: 'Could you please e-mail me your logo again?'. Ông Gerew trả lời 'Will do' (Sẽ làm ngay). Do đó, việc tiếp theo ông sẽ làm là gửi email logo cho bà Chichester.",
        translation: "Ông Gerew có khả năng sẽ làm gì tiếp theo?"
    },
    176: {
        question: "Why are parking areas being closed?",
        options: { A: 'They are being resurfaced.', B: 'They are being reserved for guests.', C: 'An outdoor event will be held on them.', D: 'A construction project is scheduled to begin.' },
        options_vn: { A: 'Chúng đang được làm lại bề mặt.', B: 'Chúng được dành cho khách.', C: 'Một sự kiện ngoài trời sẽ được tổ chức ở đó.', D: 'Một dự án xây dựng dự kiến sẽ bắt đầu.' },
        answer: 'D',
        type: "Đọc hiểu chi tiết",
        explanation: "Email nêu rõ lý do là 'crews will begin construction on the new Colton Medical Nutrition Center on June 18'. Do đó, các bãi đậu xe bị đóng cửa vì một dự án xây dựng sắp bắt đầu.",
        translation: "Tại sao các khu vực đỗ xe bị đóng cửa?"
    },
    177: {
        question: "According to the e-mail, who will receive a temporary parking sticker?",
        options: { A: 'Anyone who is visiting the medical campus', B: 'Anyone who usually parks in areas F and G', C: 'Anyone who usually parks in the parking garage', D: 'Anyone who requests one from the maintenance office' },
        options_vn: { A: 'Bất kỳ ai đến thăm khuôn viên y tế', B: 'Bất kỳ ai thường đỗ xe ở khu F và G', C: 'Bất kỳ ai thường đỗ xe trong nhà để xe', D: 'Bất kỳ ai yêu cầu một cái từ văn phòng bảo trì' },
        answer: 'B',
        type: "Đọc hiểu chi tiết",
        explanation: "Email nói rằng 'Staff currently assigned to park in areas F and G will be given temporary \"guest\" parking stickers'.",
        translation: "Theo email, ai sẽ nhận được nhãn dán đỗ xe tạm thời?"
    },
    178: {
        question: "Why should staff members limit their visits to the security building?",
        options: { A: 'So that visitors can enjoy the pond', B: 'So that fewer cars will be in the area', C: 'So that security staff can monitor traffic', D: 'So that visitors can get to the Information Center' },
        options_vn: { A: 'Để du khách có thể thưởng thức ao', B: 'Để có ít xe hơn trong khu vực', C: 'Để nhân viên an ninh có thể giám sát giao thông', D: 'Để du khách có thể đến Trung tâm Thông tin' },
        answer: 'B',
        type: "Đọc hiểu chi tiết",
        explanation: "Email giải thích: 'To help eliminate excessive traffic, please visit those places only when absolutely necessary.' Mục đích là để giảm bớt lưu lượng xe cộ trong khu vực.",
        translation: "Tại sao nhân viên nên hạn chế các chuyến thăm đến tòa nhà an ninh?"
    },
    179: {
        question: "What changed after the e-mail was sent on June 10?",
        options: { A: 'Which parking areas are being closed', B: 'Where staff should park their vehicles', C: 'Where parking stickers should be displayed', D: 'How long some parking areas will be closed' },
        options_vn: { A: 'Khu vực đỗ xe nào đang bị đóng', B: 'Nhân viên nên đỗ xe ở đâu', C: 'Nhãn dán đỗ xe nên được hiển thị ở đâu', D: 'Một số khu vực đỗ xe sẽ bị đóng trong bao lâu' },
        answer: 'D',
        type: "Đối chiếu thông tin",
        explanation: "Email ngày 10/6 nói rằng bãi F & G sẽ đóng cửa 'until August 20'. Tuy nhiên, thông báo sau đó lại ghi là 'CLOSED UNTIL SEPTEMBER 10'. Như vậy, thời gian đóng cửa đã thay đổi.",
        translation: "Điều gì đã thay đổi sau khi email được gửi vào ngày 10 tháng 6?"
    },
    180: {
        question: "According to the notice, why might a staff member's car be towed?",
        options: { A: 'If it is parked near a walkway', B: 'If it is parked in the visitors\' area', C: 'If it does not display a parking sticker', D: 'If it is parked in the garage after August 20' },
        options_vn: { A: 'Nếu nó đỗ gần lối đi bộ', B: 'Nếu nó đỗ trong khu vực của khách', C: 'Nếu nó không hiển thị nhãn dán đỗ xe', D: 'Nếu nó đỗ trong nhà để xe sau ngày 20 tháng 8' },
        answer: 'A',
        type: "Đọc hiểu chi tiết",
        explanation: "Thông báo cảnh báo: 'Cars will be immediately towed away if parked next to pedestrian areas, including all walkways...'.",
        translation: "Theo thông báo, tại sao xe của một nhân viên có thể bị kéo đi?"
    },
    181: {
        question: "What type of business is Woodruff's?",
        options: { A: 'A computer software company', B: 'A clothing store', C: 'A mobile-phone service provider', D: 'A consulting firm' },
        options_vn: { A: 'Một công ty phần mềm máy tính', B: 'Một cửa hàng quần áo', C: 'Một nhà cung cấp dịch vụ điện thoại di động', D: 'Một công ty tư vấn' },
        answer: 'B',
        type: "Suy luận",
        explanation: "Các chi tiết trong khảo sát như 'items in my size' (các mặt hàng theo cỡ của tôi) và 'dressing rooms' (phòng thay đồ) cho thấy đây là một cửa hàng quần áo.",
        translation: "Woodruff's là loại hình kinh doanh gì?"
    },
    182: {
        question: "With what statement about Woodruff's would Ms. Torres most likely agree?",
        options: { A: 'It is located close to her home.', B: 'It has a large staff.', C: 'It is relatively inexpensive.', D: 'It is open later than other businesses.' },
        options_vn: { A: 'Nó nằm gần nhà cô ấy.', B: 'Nó có đội ngũ nhân viên lớn.', C: 'Nó tương đối rẻ.', D: 'Nó mở cửa muộn hơn các doanh nghiệp khác.' },
        answer: 'C',
        type: "Suy luận",
        explanation: "Bà Torres đánh giá 3/5 (Không có ý kiến) cho mục 'The items were priced well compared to other stores'. Mặc dù không hoàn toàn đồng ý, đây là lựa chọn gần nhất và hợp lý hơn các lựa chọn còn lại, cho thấy giá cả không đắt.",
        translation: "Bà Torres có khả năng sẽ đồng ý nhất với nhận định nào về Woodruff's?"
    },
    183: {
        question: "In the e-mail, the word 'appreciate' in paragraph 1, line 2, is closest in meaning to",
        options: { A: 'increase', B: 'order', C: 'understand', D: 'value' },
        options_vn: { A: 'tăng', B: 'đặt hàng', C: 'hiểu', D: 'trân trọng, đánh giá cao' },
        answer: 'D',
        type: "Từ vựng (Vocabulary)",
        explanation: "'Appreciate' trong ngữ cảnh này có nghĩa là 'trân trọng, đánh giá cao'. 'Value' là từ đồng nghĩa gần nhất.",
        translation: "Trong email, từ 'appreciate' ở đoạn 1, dòng 2, gần nghĩa nhất với"
    },
    184: {
        question: "What most likely is Woodruff's planning to do?",
        options: { A: 'Teach its employees to be more friendly and helpful to customers', B: 'Make the workplace cleaner and more organized', C: 'Open an additional location in Clarksville', D: 'Offer a discount voucher to all customers who complete a survey' },
        options_vn: { A: 'Dạy nhân viên của mình thân thiện và hữu ích hơn với khách hàng', B: 'Làm cho nơi làm việc sạch sẽ và ngăn nắp hơn', C: 'Mở một địa điểm khác ở Clarksville', D: 'Tặng phiếu giảm giá cho tất cả khách hàng hoàn thành khảo sát' },
        answer: 'A',
        type: "Suy luận",
        explanation: "Email thừa nhận rằng nhiều khách hàng, bao gồm cả bà Torres (đánh giá 2/5), không hài lòng về 'salespeople' (nhân viên bán hàng). Sau đó email nói 'We plan to improve this area with training soon'. Do đó, họ sẽ đào tạo nhân viên để thân thiện và hữu ích hơn.",
        translation: "Woodruff's có khả năng lớn nhất sẽ lên kế hoạch làm gì?"
    },
    185: {
        question: "What is suggested about the survey?",
        options: { A: 'It has been taken by many customers.', B: 'It was created by Ms. Passante.', C: 'It is accessible on the company Web site.', D: 'It has been in use for one year.' },
        options_vn: { A: 'Nó đã được thực hiện bởi nhiều khách hàng.', B: 'Nó được tạo ra bởi bà Passante.', C: 'Nó có thể truy cập trên trang web của công ty.', D: 'Nó đã được sử dụng trong một năm.' },
        answer: 'A',
        type: "Suy luận",
        explanation: "Email nói 'We appreciate that so many people took the time to provide us with feedback' và 'dissatisfaction with a significant proportion of the customers who responded'. Điều này cho thấy đã có nhiều khách hàng tham gia khảo sát.",
        translation: "Điều gì được gợi ý về cuộc khảo sát?"
    },
    186: {
        question: "Why was the first e-mail sent?",
        options: { A: 'To ask for customer feedback', B: 'To seek a solution to a problem', C: 'To request a refund on an item', D: 'To cancel an order for tableware' },
        options_vn: { A: 'Để hỏi ý kiến phản hồi của khách hàng', B: 'Để tìm giải pháp cho một vấn đề', C: 'Để yêu cầu hoàn tiền cho một mặt hàng', D: 'Để hủy đơn hàng bộ đồ ăn' },
        answer: 'B',
        type: "Đọc hiểu mục đích chính",
        explanation: "Bà Jacques viết email để báo cáo về các sai sót trong đơn hàng của mình (nhận thiếu đĩa, cốc bị vỡ) và hỏi 'How soon can you fix my order?'. Mục đích là để tìm kiếm một giải pháp cho vấn đề.",
        translation: "Tại sao email đầu tiên được gửi?"
    },
    187: {
        question: "What item was received damaged?",
        options: { A: '14L', B: '17P', C: '18S', D: '21G' },
        options_vn: { A: 'Khăn trải bàn', B: 'Đĩa ăn tối', C: 'Đĩa phục vụ', D: 'Cốc nước' },
        answer: 'D',
        type: "Đối chiếu thông tin",
        explanation: "Email của bà Jacques nói rằng 'seven water goblets arrived with cracks'. Đối chiếu với hóa đơn, 'water goblets' là mã hàng 21G.",
        translation: "Mặt hàng nào đã bị nhận trong tình trạng hư hỏng?"
    },
    188: {
        question: "In the second e-mail, the word 'extend' in paragraph 1, line 1, is closest in meaning to",
        options: { A: 'offer', B: 'delay', C: 'continue', D: 'increase' },
        options_vn: { A: 'đưa ra, gửi đến', B: 'trì hoãn', C: 'tiếp tục', D: 'tăng' },
        answer: 'A',
        type: "Từ vựng (Vocabulary)",
        explanation: "Cụm từ 'extend my apology' có nghĩa là 'gửi lời xin lỗi của tôi'. Trong ngữ cảnh này, 'extend' gần nghĩa nhất với 'offer' (đưa ra, gửi đến).",
        translation: "Trong email thứ hai, từ 'extend' ở đoạn 1, dòng 1, gần nghĩa nhất với"
    },
    189: {
        question: "What is NOT indicated about McGivern Wholesale?",
        options: { A: 'It does business with restaurants.', B: 'It is changing the location of a facility.', C: 'It has been operating for five years.', D: 'It is revising its price list.' },
        options_vn: { A: 'Nó kinh doanh với các nhà hàng.', B: 'Nó đang thay đổi địa điểm của một cơ sở.', C: 'Nó đã hoạt động được năm năm.', D: 'Nó đang sửa đổi bảng giá của mình.' },
        answer: 'D',
        type: "Đọc hiểu chi tiết (Loại trừ)",
        explanation: "Thông tin (A) được đề cập qua khách hàng Salek's Café. (B) được đề cập trong email thứ hai ('moving to a new warehouse'). (C) được đề cập trong email đầu tiên ('since you opened five years ago'). Không có thông tin nào về việc họ đang sửa đổi bảng giá.",
        translation: "Điều gì KHÔNG được chỉ ra về McGivern Wholesale?"
    },
    190: {
        question: "What will McGivern Wholesale give to Ms. Jacques?",
        options: { A: 'A rebate on shipping charges', B: 'An extra package of table linens', C: 'A reduced price on her next order', D: 'An updated invoice' },
        options_vn: { A: 'Một khoản giảm giá phí vận chuyển', B: 'Một gói khăn trải bàn thêm', C: 'Một mức giá giảm cho đơn hàng tiếp theo của cô ấy', D: 'Một hóa đơn cập nhật' },
        answer: 'C',
        type: "Đọc hiểu chi tiết",
        explanation: "Email thứ hai của ông McGivern nói: 'I hope you will accept a 15 percent discount on your next shipment'. Điều này có nghĩa là một mức giá giảm cho đơn hàng tiếp theo của bà.",
        translation: "McGivern Wholesale sẽ đưa gì cho bà Jacques?"
    },
    191: {
        question: "On April 10, what work does Ms. Choi want Mr. Nunez to do for her?",
        options: { A: 'Deliver furniture', B: 'Install tiles', C: 'Clean the living room carpets', D: 'Paint the dining room walls' },
        options_vn: { A: 'Giao đồ nội thất', B: 'Lắp đặt gạch', C: 'Làm sạch thảm phòng khách', D: 'Sơn tường phòng ăn' },
        answer: 'B',
        type: "Đối chiếu thông tin",
        explanation: "Email của bà Choi đề cập đến 'the job in my dining room' và bản ước tính chi phí liệt kê công việc liên quan đến 'Unglazed ceramic floor tiles' (gạch lát sàn) và vữa. Do đó, công việc là lắp đặt gạch.",
        translation: "Vào ngày 10 tháng 4, bà Choi muốn ông Nunez làm công việc gì cho mình?"
    },
    192: {
        question: "What will happen after April 15?",
        options: { A: "Ms. Choi's application will be reviewed.", B: 'Ms. Choi will receive a final bill.', C: 'The new city ordinance will go into effect.', D: 'The cost estimate will become invalid.' },
        options_vn: { A: 'Đơn của bà Choi sẽ được xem xét.', B: 'Bà Choi sẽ nhận được hóa đơn cuối cùng.', C: 'Pháp lệnh thành phố mới sẽ có hiệu lực.', D: 'Ước tính chi phí sẽ không còn hợp lệ.' },
        answer: 'D',
        type: "Đối chiếu thông tin",
        explanation: "Bản ước tính chi phí được lập vào ngày 15 tháng 3 và có ghi 'All estimates are valid for one month'. Do đó, sau ngày 15 tháng 4, ước tính này sẽ không còn hợp lệ.",
        translation: "Điều gì sẽ xảy ra sau ngày 15 tháng 4?"
    },
    193: {
        question: "How much will likely be added to Ms. Choi's estimate?",
        options: { A: '$32.99', B: '$35.00', C: '$100.00', D: '$300.00' },
        options_vn: { A: '$32.99', B: '$35.00', C: '$100.00', D: '$300.00' },
        answer: 'C',
        type: "Đối chiếu thông tin",
        explanation: "Email của bà Choi hỏi về phí giấy phép xây dựng. Pháp lệnh thành phố quy định phí này là '$100 for residential buildings' (100 đô la cho các tòa nhà dân cư). Công việc trong phòng ăn của bà là dự án dân cư.",
        translation: "Bao nhiêu tiền có khả năng sẽ được thêm vào ước tính của bà Choi?"
    },
    194: {
        question: "In the e-mail, the word 'contract' in paragraph 1, line 1, is closest in meaning to",
        options: { A: 'reduce', B: 'retain', C: 'collect', D: 'purchase' },
        options_vn: { A: 'giảm', B: 'thuê', C: 'thu thập', D: 'mua' },
        answer: 'B',
        type: "Từ vựng (Vocabulary)",
        explanation: "Trong ngữ cảnh 'I'd like to contract you for', 'contract' được dùng như một động từ có nghĩa là 'thuê, ký hợp đồng với'. 'Retain' (giữ lại, thuê) là từ có nghĩa gần nhất.",
        translation: "Trong email, từ 'contract' ở đoạn 1, dòng 1, gần nghĩa nhất với"
    },
    195: {
        question: "What does Ms. Choi indicate about Reddford Construction?",
        options: { A: 'She has hired them for a job before.', B: 'She needs to reschedule an appointment with them.', C: 'She thinks that their prices are too high.', D: 'She believes that they bought too many tiles.' },
        options_vn: { A: 'Cô ấy đã thuê họ cho một công việc trước đây.', B: 'Cô ấy cần lên lịch lại cuộc hẹn với họ.', C: 'Cô ấy nghĩ rằng giá của họ quá cao.', D: 'Cô ấy tin rằng họ đã mua quá nhiều gạch.' },
        answer: 'A',
        type: "Đọc hiểu chi tiết",
        explanation: "Bà Choi viết: 'I really liked the job you did installing carpeting and painting in my living room last year...'. Điều này cho thấy bà đã từng thuê họ làm việc trước đây.",
        translation: "Bà Choi chỉ ra điều gì về công ty Reddford Construction?"
    },
    196: {
        question: "What is the purpose of the article?",
        options: { A: 'To provide an update on a local project', B: 'To discuss state-of-the-art warehouse equipment', C: 'To report on local businesses that plan to hire more workers', D: 'To explain difficulties encountered on a construction project' },
        options_vn: { A: 'Để cung cấp thông tin cập nhật về một dự án địa phương', B: 'Để thảo luận về thiết bị nhà kho hiện đại', C: 'Để báo cáo về các doanh nghiệp địa phương có kế hoạch thuê thêm công nhân', D: 'Để giải thích những khó khăn gặp phải trong một dự án xây dựng' },
        answer: 'A',
        type: "Đọc hiểu mục đích chính",
        explanation: "Bài báo nói về việc mở một trung tâm phân phối mới, các vấn đề đã được giải quyết và thời gian dự kiến hoạt động. Đây là một bản cập nhật về một dự án tại địa phương.",
        translation: "Mục đích của bài báo là gì?"
    },
    197: {
        question: "In the article, the word 'scope' in paragraph 2, line 4, is closest in meaning to",
        options: { A: 'instrument used for viewing', B: 'evaluation', C: 'time of completion', D: 'extent' },
        options_vn: { A: 'dụng cụ dùng để xem', B: 'sự đánh giá', C: 'thời gian hoàn thành', D: 'phạm vi, quy mô' },
        answer: 'D',
        type: "Từ vựng (Vocabulary)",
        explanation: "'Scope' trong cụm 'size and scope of the project' có nghĩa là 'phạm vi, quy mô'. 'Extent' (mức độ, phạm vi) là từ đồng nghĩa gần nhất.",
        translation: "Trong bài báo, từ 'scope' ở đoạn 2, dòng 4, gần nghĩa nhất với"
    },
    198: {
        question: "What is most likely true about the Cardiff distribution center?",
        options: { A: 'It had a problem with food storage.', B: 'Its grand opening was successful.', C: 'Mr. Simler was recently hired there.', D: 'Ms. Baral was unhappy with its service.' },
        options_vn: { A: 'Nó có vấn đề với việc lưu trữ thực phẩm.', B: 'Lễ khai trương của nó đã thành công.', C: 'Ông Simler mới được thuê ở đó.', D: 'Bà Baral không hài lòng với dịch vụ của nó.' },
        answer: 'B',
        type: "Suy luận",
        explanation: "Trong email, bà Baral nói về lễ khai trương (grand opening): 'I do not believe I have ever seen such a well-planned event'. Điều này cho thấy sự kiện đã rất thành công.",
        translation: "Điều gì có khả năng đúng nhất về trung tâm phân phối Cardiff?"
    },
    199: {
        question: "What company was chosen by Mr. Simler?",
        options: { A: "The company that Ms. Baral's contact works for", B: "The company with the most reliable customer-service representatives", C: "The company that has lower rates than a competitor", D: "The company with an overnight call center" },
        options_vn: { A: 'Công ty mà người liên hệ của bà Baral làm việc', B: 'Công ty có đại diện dịch vụ khách hàng đáng tin cậy nhất', C: 'Công ty có mức giá thấp hơn đối thủ cạnh tranh', D: 'Công ty có trung tâm cuộc gọi qua đêm' },
        answer: 'C',
        type: "Đối chiếu thông tin",
        explanation: "Tin nhắn văn bản được gửi từ 'Raven Notifications'. Trong email, bà Baral đã đề cập đến Raven Notifications là công ty có 'rates are lower' (giá thấp hơn). Điều này cho thấy ông Simler đã chọn công ty này.",
        translation: "Công ty nào đã được ông Simler lựa chọn?"
    },
    200: {
        question: "What does the text message ask employees who want additional work to do?",
        options: { A: 'Arrive on Tuesday night', B: 'Contact the personnel office', C: 'Reply to the message with the hours they can work', D: 'Go to a different distribution center' },
        options_vn: { A: 'Đến vào tối thứ Ba', B: 'Liên hệ với văn phòng nhân sự', C: 'Trả lời tin nhắn với số giờ họ có thể làm việc', D: 'Đến một trung tâm phân phối khác' },
        answer: 'B',
        type: "Đọc hiểu chi tiết",
        explanation: "Tin nhắn yêu cầu: 'If you are interested in working additional hours at that time, please contact Becca Johnston in Human Resources'. Human Resources chính là văn phòng nhân sự (personnel office).",
        translation: "Tin nhắn văn bản yêu cầu những nhân viên muốn làm thêm giờ phải làm gì?"
    }
};

// --- SCRIPT LOGIC ---
let userAnswers = {};
const totalQuestions = 200;
let submissionInProgress = false;
const questionPartMapping = {};
let timerInterval;
let flaggedQuestions = new Set();
let allQuestionElementsOrder = [];
let testTakerName = '';

// --- NEW: State for reading parts navigation ---
let readingPartCurrentIndex = {
    part5: 0,
    part6: 0,
    part7: 0
};

// --- DOM Elements ---
const confirmationModal = document.getElementById('confirmation-modal');
const modalText = document.getElementById('modal-text');
const confirmBtn = document.getElementById('modal-confirm-btn');
const cancelBtn = document.getElementById('modal-cancel-btn');

const authContainer = document.getElementById('auth-container');
const loginModal = document.getElementById('login-modal');
const registerModal = document.getElementById('register-modal');
const readyModal = document.getElementById('ready-modal');

const mainTestWrapper = document.getElementById('main-test-wrapper');
const userDisplay = document.getElementById('user-display');
const userNameDisplay = document.getElementById('user-name-display');

// --- Modal Functions ---
function showModal(modalElement) {
    if(modalElement) modalElement.classList.add('visible');
}

function hideModal(modalElement) {
    if(modalElement) modalElement.classList.remove('visible');
}

function showConfirmationModal(text) {
    modalText.textContent = text;
    showModal(confirmationModal);
}

// --- Auth Functions ---
function handleRegister(e) {
    e.preventDefault();
    const fullName = document.getElementById('register-fullname').value.trim();
    const username = document.getElementById('register-username').value.trim();
    const password = document.getElementById('register-password').value.trim();
    const errorDiv = document.getElementById('register-error');

    if (!fullName || !username || !password) {
        errorDiv.textContent = 'Vui lòng nhập đầy đủ họ tên, tên đăng nhập và mật khẩu.';
        errorDiv.classList.remove('hidden');
        return;
    }

    let users = JSON.parse(localStorage.getItem('toeicUsers')) || [];
    if (users.find(user => user.username === username)) {
        errorDiv.textContent = 'Tên đăng nhập đã tồn tại.';
        errorDiv.classList.remove('hidden');
        return;
    }

    users.push({ fullName, username, password });
    localStorage.setItem('toeicUsers', JSON.stringify(users));
    
    alert('Đăng ký thành công! Vui lòng đăng nhập.');
    hideModal(registerModal);
    showModal(loginModal);
    errorDiv.classList.add('hidden');
    document.getElementById('register-fullname').value = '';
    document.getElementById('register-username').value = '';
    document.getElementById('register-password').value = '';
}

function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();
    const errorDiv = document.getElementById('login-error');

    if (!username || !password) {
        errorDiv.textContent = 'Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu.';
        errorDiv.classList.remove('hidden');
        return;
    }

    let users = JSON.parse(localStorage.getItem('toeicUsers')) || [];
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        localStorage.setItem('currentUser', user.username);
        testTakerName = user.fullName; 
        hideModal(loginModal);
        showModal(readyModal);
        errorDiv.classList.add('hidden');
    } else {
        errorDiv.textContent = 'Tên đăng nhập hoặc mật khẩu không đúng.';
        errorDiv.classList.remove('hidden');
    }
}

function handleLogout() {
    localStorage.removeItem('currentUser');
    testTakerName = '';
    window.location.reload();
}

function checkAuth() {
    const currentUsername = localStorage.getItem('currentUser');
    if (currentUsername) {
        let users = JSON.parse(localStorage.getItem('toeicUsers')) || [];
        const user = users.find(u => u.username === currentUsername);
        
        if(user) {
            testTakerName = user.fullName;
        } else {
            testTakerName = currentUsername; // Fallback
        }
        
        hideModal(authContainer);
        hideModal(loginModal);
        mainTestWrapper.style.display = 'block';
        showModal(readyModal);
    } else {
        mainTestWrapper.style.display = 'block';
        showModal(loginModal);
    }
}

// --- Test Logic ---
cancelBtn.addEventListener('click', () => hideModal(confirmationModal));
confirmBtn.addEventListener('click', () => {
    hideModal(confirmationModal);
    gradeTest();
});

function navigateToQuestion(questionId) {
    const part = questionPartMapping[questionId];
    if (part) {
        changeTab(part);
        setTimeout(() => {
            const elementToShow = document.getElementById(`q-${questionId}`)?.closest('.conversation-group, .passage-container-wrapper') || document.getElementById(`q-${questionId}`);

            if (elementToShow) {
                const isReadingPartWithNav = ['part5', 'part6', 'part7'].includes(part);

                if (isReadingPartWithNav) {
                    const container = document.getElementById(part);
                    const items = Array.from(container.children).filter(el => el.id && (el.id.startsWith('q-') || el.id.startsWith('group-')));
                    const targetIndex = items.findIndex(item => item.id === elementToShow.id);
                    
                    if (targetIndex !== -1) {
                        items.forEach((item, idx) => {
                            if (idx === targetIndex) {
                                item.classList.remove('hidden');
                            } else {
                                item.classList.add('hidden');
                            }
                        });
                        readingPartCurrentIndex[part] = targetIndex;
                        updateNavButtons(part);
                    }
                } else if (['part1', 'part2', 'part3', 'part4'].includes(part)) {
                    const partContainer = document.getElementById(part);
                    Array.from(partContainer.children).forEach(child => {
                        if (child.id && (child.id.startsWith('q-') || child.id.startsWith('group-'))) {
                            child.classList.add('hidden');
                        }
                    });
                    elementToShow.classList.remove('hidden');
                }
                
                elementToShow.scrollIntoView({ behavior: 'smooth', block: 'center' });
                elementToShow.classList.add('ring-2', 'ring-blue-500', 'ring-offset-2');
                setTimeout(() => elementToShow.classList.remove('ring-2', 'ring-blue-500', 'ring-offset-2'), 2000);
            }
        }, 100);
    }
}

function changeTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    document.querySelector(`.tab-btn[onclick="changeTab('${tabId}')"]`).classList.add('active');
}

function lockListeningSection() {
    document.getElementById('audio-player').disabled = true;
    const listeningParts = ['part1', 'part2', 'part3', 'part4'];
    listeningParts.forEach(part => {
        document.querySelectorAll(`#${part} .option-btn, #${part} .flag-btn`).forEach(btn => {
            btn.disabled = true;
        });
    });
    document.getElementById('lock-notification').classList.remove('hidden');
}

function startTimer() {
    let duration = 120 * 60; // 120 minutes in seconds
    const timerDisplay = document.getElementById('timer');

    timerInterval = setInterval(() => {
        let minutes = parseInt(duration / 60, 10);
        let seconds = parseInt(duration % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerDisplay.textContent = minutes + ":" + seconds;

        if (duration === 75 * 60) {
            lockListeningSection();
        }

        if (--duration < 0) {
            clearInterval(timerInterval);
            gradeTest();
        }
    }, 1000);
}

function toggleFlag(questionId) {
    if (submissionInProgress) return;
    const flagBtn = document.getElementById(`flag-btn-${questionId}`);
    const ansSheetBtn = document.getElementById(`ans-sheet-btn-${questionId}`);
    if (flaggedQuestions.has(questionId)) {
        flaggedQuestions.delete(questionId);
        flagBtn.classList.remove('flagged');
        ansSheetBtn.classList.remove('flagged');
    } else {
        flaggedQuestions.add(questionId);
        flagBtn.classList.add('flagged');
        ansSheetBtn.classList.add('flagged');
    }
}

function createQuestionBlock(qData, part) {
    const qBlock = document.createElement('div');
    const isPassageQuestion = qData.isPassage || (part === 'part3' || part === 'part4' || part === 'part6' || part === 'part7');
    
    let layoutClasses = 'bg-white shadow-md rounded-lg p-6 mb-6';
    if (part === 'part1') {
        layoutClasses = 'bg-white shadow-md rounded-lg p-6 mb-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center';
    } else if (isPassageQuestion) {
         layoutClasses = 'mt-6 border-t pt-6';
    }
    qBlock.className = layoutClasses;
    qBlock.id = `q-${qData.id}`;
    
    const contentWrapper = document.createElement('div');
    if (part === 'part1') {
        const imgWrapper = document.createElement('div');
        const img = document.createElement('img');
        img.src = qData.img;
        img.alt = `Image for question ${qData.id}`;
        img.className = 'w-full h-auto rounded-lg';
        img.onerror = function() { this.src='https://placehold.co/600x400/e2e8f0/475569?text=Image+not+available'; };
        imgWrapper.appendChild(img);
        qBlock.appendChild(imgWrapper);
        qBlock.appendChild(contentWrapper);
    } else {
      qBlock.appendChild(contentWrapper);
    }

    const qHeader = document.createElement('div');
    qHeader.className = 'flex justify-between items-start mb-4';

    const qText = document.createElement('p');
    qText.className = 'text-lg font-medium flex-grow';
    const questionContent = qData.question ? qData.question : '';
    qText.innerHTML = `<span class="font-bold text-blue-600">${qData.id}.</span> ${questionContent}`;
    
    const flagBtn = document.createElement('button');
    flagBtn.className = 'flag-btn p-1 rounded-full hover:bg-gray-100 flex-shrink-0 ml-4';
    flagBtn.id = `flag-btn-${qData.id}`;
    flagBtn.title = 'Đánh dấu để xem lại';
    flagBtn.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6H8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path></svg>`;
    flagBtn.onclick = () => toggleFlag(qData.id);

    qHeader.appendChild(qText);
    qHeader.appendChild(flagBtn);
    contentWrapper.appendChild(qHeader);
    
    const optionsContainer = document.createElement('div');
    let optionsLayout = 'grid grid-cols-1 gap-3 mt-4';
    optionsContainer.className = optionsLayout;
    
    const options = qData.options || (part === 'part1' ? {A:'', B:'', C:'', D:''} : {A:'', B:'', C:''});

    for (const key in options) {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'option-btn w-full text-left p-3 border-2 border-gray-300 rounded-lg bg-white';
        optionBtn.dataset.option = key;
        optionBtn.dataset.questionId = qData.id;
        optionBtn.innerHTML = `<span class="font-bold mr-2">${key}.</span> ${options[key]}`;
        if(part === 'part1' || part === 'part2') optionBtn.innerHTML = `<span class="font-bold mr-2">${key}.</span>`;
        optionBtn.onclick = () => handleAnswerSelection(qData.id, key);
        optionsContainer.appendChild(optionBtn);
    }
    contentWrapper.appendChild(optionsContainer);
    
    const resultMessage = document.createElement('div');
    resultMessage.className = 'result-message mt-3 font-semibold';
    contentWrapper.appendChild(resultMessage);

    return qBlock;
}

function createPassageBlock(pData, part, index) {
    const passageContainer = document.createElement('div');
    passageContainer.className = 'passage-container-wrapper bg-white shadow-md rounded-lg p-6 mb-6 grid grid-cols-1 md:grid-cols-2 gap-8';
    passageContainer.id = `group-${part}-${index}`;
    passageContainer.dataset.questions = pData.questions.map(q => q.id).join(',');
    
    const leftCol = document.createElement('div');
    leftCol.className = 'scrollable-column max-h-[85vh] overflow-y-auto pr-4';

    const rightCol = document.createElement('div');
    rightCol.className = 'scrollable-column max-h-[85vh] overflow-y-auto pr-4';
    
    const passageContent = document.createElement('div');
    passageContent.className = 'passage-content prose max-w-none';
    passageContent.innerHTML = `<strong>${pData.passageTitle}</strong><br><br>${pData.passage}`;
    leftCol.appendChild(passageContent);

    if (pData.graphic) {
        const img = document.createElement('img');
        img.src = pData.graphic;
        img.alt = `Graphic for questions`;
        img.className = 'w-full h-auto rounded-lg my-4';
        leftCol.appendChild(img);
    }

    pData.questions.forEach(q => {
        q.isPassage = true;
        const questionBlock = createQuestionBlock(q, part);
        rightCol.appendChild(questionBlock);
    });
    
    passageContainer.appendChild(leftCol);
    passageContainer.appendChild(rightCol);
    return passageContainer;
}

function createAudioPassageBlock(pData, part, index) {
    const passageContainer = document.createElement('div');
    passageContainer.className = 'conversation-group bg-white shadow-md rounded-lg p-6 mb-6';
    passageContainer.id = `group-${part}-${index}`;
    passageContainer.dataset.questions = pData.questions.map(q => q.id).join(',');
    
    const audioNote = document.createElement('div');
    audioNote.className = 'audio-placeholder text-base mb-4';
    audioNote.innerHTML = `<p class="font-bold">${pData.passage}</p>`;
    passageContainer.appendChild(audioNote);

    if (pData.graphic) {
        const img = document.createElement('img');
        img.src = pData.graphic;
        img.alt = `Graphic for questions`;
        img.className = 'max-w-xs mx-auto h-auto rounded-lg my-4';
        passageContainer.appendChild(img);
    }

    pData.questions.forEach(q => {
        q.isPassage = true;
        const questionBlock = createQuestionBlock(q, part);
        passageContainer.appendChild(questionBlock);
    });

    return passageContainer;
}

function autoAdvance(currentElementId) {
    const currentIndex = allQuestionElementsOrder.findIndex(el => el.id === currentElementId);
    if (currentIndex > -1 && currentIndex < allQuestionElementsOrder.length - 1) {
        const nextElement = allQuestionElementsOrder[currentIndex + 1];
        setTimeout(() => {
            const currentElement = allQuestionElementsOrder[currentIndex];
            currentElement.classList.add('hidden');
            nextElement.classList.remove('hidden');
            nextElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 2500);
    }
}

function handleAnswerSelection(questionId, selectedOption) {
    if(submissionInProgress) return;
    userAnswers[questionId] = selectedOption;
    
    document.querySelectorAll(`button[data-question-id='${questionId}']`).forEach(btn => {
        btn.classList.remove('selected');
    });
    document.querySelector(`button[data-question-id='${questionId}'][data-option='${selectedOption}']`).classList.add('selected');
    
    const ansSheetBtn = document.getElementById(`ans-sheet-btn-${questionId}`);
    if (ansSheetBtn) {
        ansSheetBtn.classList.add('answered');
    }

    const questionElement = document.getElementById(`q-${questionId}`);
    const parentGroup = questionElement.closest('.conversation-group, .passage-container-wrapper');
    const part = questionPartMapping[questionId];

    if (['part1', 'part2', 'part3', 'part4'].includes(part)) {
        if (parentGroup) {
            const questionIdsInGroup = parentGroup.dataset.questions.split(',').map(Number);
            const allAnswered = questionIdsInGroup.every(id => userAnswers.hasOwnProperty(id));
            if (allAnswered) {
                autoAdvance(parentGroup.id);
            }
        } else {
            autoAdvance(questionElement.id);
        }
    }

    const partRanges = {
        part1: { start: 1, end: 6, next: 'part2' },
        part2: { start: 7, end: 31, next: 'part3' },
        part3: { start: 32, end: 70, next: 'part4' },
        part4: { start: 71, end: 100, next: 'part5' },
    };

    const currentPartId = questionPartMapping[questionId];
    const currentPartInfo = partRanges[currentPartId];

    if (currentPartInfo && !submissionInProgress) {
        const { start, end, next } = currentPartInfo;
        let allAnsweredInPart = true;
        for (let i = start; i <= end; i++) {
            if (!userAnswers.hasOwnProperty(i)) {
                allAnsweredInPart = false;
                break;
            }
        }

        if (allAnsweredInPart) {
            setTimeout(() => {
                changeTab(next);
                document.querySelector(`.tab-btn[onclick="changeTab('${next}')"]`).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }, 800);
        }
    }
}

function generateAnswerSheet() {
    const container = document.getElementById('answerSheet');
    container.innerHTML = '';
    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-10 md:grid-cols-20 gap-2';
    
    for (let i = 1; i <= 200; i++) {
        const button = document.createElement('button');
        button.id = `ans-sheet-btn-${i}`;
        button.className = 'ans-sheet-btn p-2 rounded-md text-center transition-colors';
        button.textContent = i;
        button.onclick = () => navigateToQuestion(i);
        grid.appendChild(button);
    }
    container.appendChild(grid);
}

// --- NEW: Reading Parts Navigation Functions ---
function createNavigationControls(partId) {
    const navContainer = document.createElement('div');
    navContainer.className = 'flex justify-between items-center mt-8 reading-nav-controls';

    const prevBtn = document.createElement('button');
    prevBtn.id = `prev-btn-${partId}`;
    prevBtn.className = 'bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all';
    prevBtn.innerHTML = '&larr; Câu Trước';
    prevBtn.onclick = () => navigateReadingQuestion(partId, 'prev');

    const nextBtn = document.createElement('button');
    nextBtn.id = `next-btn-${partId}`;
    nextBtn.className = 'bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all';
    nextBtn.innerHTML = 'Câu Sau &rarr;';
    nextBtn.onclick = () => navigateReadingQuestion(partId, 'next');

    navContainer.appendChild(prevBtn);
    navContainer.appendChild(nextBtn);
    return navContainer;
}

function navigateReadingQuestion(partId, direction) {
    const container = document.getElementById(partId);
    const items = Array.from(container.children).filter(el => el.id && (el.id.startsWith('q-') || el.id.startsWith('group-')));
    if (items.length === 0) return;

    let currentIndex = readingPartCurrentIndex[partId];
    items[currentIndex].classList.add('hidden');

    if (direction === 'next') {
        currentIndex = Math.min(currentIndex + 1, items.length - 1);
    } else { // 'prev'
        currentIndex = Math.max(currentIndex - 1, 0);
    }

    readingPartCurrentIndex[partId] = currentIndex;
    items[currentIndex].classList.remove('hidden');
    items[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    updateNavButtons(partId);
}

function updateNavButtons(partId) {
    const container = document.getElementById(partId);
    const items = Array.from(container.children).filter(el => el.id && (el.id.startsWith('q-') || el.id.startsWith('group-')));
    const currentIndex = readingPartCurrentIndex[partId];
    
    const prevBtn = document.getElementById(`prev-btn-${partId}`);
    const nextBtn = document.getElementById(`next-btn-${partId}`);

    if (prevBtn) prevBtn.disabled = (currentIndex === 0);
    if (nextBtn) nextBtn.disabled = (currentIndex === items.length - 1);
}

function generateQuiz() {
    const listeningParts = ['part1', 'part2', 'part3', 'part4'];
    
    for (const part in quizData) {
        const container = document.getElementById(part);
        if (!container) continue;

        const isReadingPartWithNav = ['part5', 'part6', 'part7'].includes(part);

        quizData[part].forEach((item, index) => {
            let block;
            if (item.questions) {
                 item.questions.forEach(q => questionPartMapping[q.id] = part);
                 if (listeningParts.includes(part)) {
                     block = createAudioPassageBlock(item, part, index);
                 } else {
                     block = createPassageBlock(item, part, index);
                 }
            } else {
                questionPartMapping[item.id] = part;
                block = createQuestionBlock(item, part);
            }
            
            if ((listeningParts.includes(part) || isReadingPartWithNav) && index > 0) {
                block.classList.add('hidden');
            }
            
            container.appendChild(block);

            if (listeningParts.includes(part)) {
                allQuestionElementsOrder.push(block);
            }
        });

        // --- ADDED: Add nav controls for reading parts ---
        if (isReadingPartWithNav) {
            const navControls = createNavigationControls(part);
            container.appendChild(navControls);
            updateNavButtons(part);
        }
    }
    if (allQuestionElementsOrder.length > 0) {
        allQuestionElementsOrder[0].classList.remove('hidden');
    }
    generateAnswerSheet();
}
function generateExplanations() {
    const explanationContainer = document.getElementById('explanation');
    explanationContainer.innerHTML = `<h2 class="text-3xl font-bold text-center mb-8 text-blue-700">Giải Thích Chi Tiết</h2>`;

    for (let i = 1; i <= 200; i++) {
        const explanationData = explanationsData[i];
        if (explanationData) {
            const expBlock = document.createElement('div');
            expBlock.className = 'bg-white shadow-md rounded-lg p-6 mb-6';
            expBlock.id = `exp-${i}`;

            // --- PHẦN ĐƯỢC CẬP NHẬT ĐỂ HIỂN THỊ OPTIONS_VN ---
            let optionsHtml = '';
            const options = explanationData.options;
            const options_vn = explanationData.options_vn; // Lấy thêm dữ liệu dịch đáp án

            if (options) {
                optionsHtml = '<div class="space-y-2 mt-4 text-gray-800">';
                for (const key in options) {
                    // Tạo chuỗi dịch, nếu có thì thêm vào
                    const vn_text = (options_vn && options_vn[key]) ? ` <span class="text-gray-500 italic">  (${options_vn[key]})</span>` : '';

                    // Kiểm tra và làm nổi bật đáp án đúng
                    if (key === explanationData.answer) {
                        optionsHtml += `<p class="font-semibold text-green-700 bg-green-100 p-2 rounded-md"><strong>${key}. ${options[key]}</strong>${vn_text} <span class="font-bold">(Đáp án đúng)</span></p>`;
                    } else {
                        optionsHtml += `<p class="p-2">${key}. ${options[key]}${vn_text}</p>`;
                    }
                }
                optionsHtml += '</div>';
            }
            // --- KẾT THÚC PHẦN CẬP NHẬT ---

            expBlock.innerHTML = `
                <p class="text-lg font-semibold text-blue-600 mb-2">Câu ${i}: ${explanationData.question || ''}</p>
                
                ${optionsHtml}

                <div class="border-l-4 border-gray-300 pl-4 mt-4 pt-4 border-t">
                    <p class="mb-2"><strong class="font-medium text-gray-900">Loại câu hỏi:</strong> <span class="text-gray-700">${explanationData.type}</span></p>
                    <p class="mb-2"><strong class="font-medium text-gray-900">Giải thích:</strong> <span class="text-gray-700">${explanationData.explanation}</span></p>
                    <p><strong class="font-medium text-gray-900">Dịch nghĩa:</strong> <em class="text-gray-700">"${explanationData.translation}"</em></p>
                </div>
            `;
            explanationContainer.appendChild(expBlock);
        }
    }
}
function gradeTest() {
    if (submissionInProgress) return;
    submissionInProgress = true;
    clearInterval(timerInterval);
    
    const audioPlayer = document.getElementById('audio-player');
    if (audioPlayer) {
        audioPlayer.pause();
    }
    generateExplanations();
    document.getElementById('explanation-tab-btn').classList.remove('hidden');
    // --- ADDED: Show all questions and hide nav controls before grading ---
    document.querySelectorAll('.tab-content .hidden').forEach(el => {
        if (el.id && (el.id.startsWith('q-') || el.id.startsWith('group-'))) {
            el.classList.remove('hidden');
        }
    });
    document.querySelectorAll('.reading-nav-controls').forEach(nav => nav.style.display = 'none');


    const results = {};
    let allQuestions = [];

    for (const partName in quizData) {
        results[partName] = { correct: 0, total: 0 };
        quizData[partName].forEach(item => {
            const questions = item.questions || [item];
            results[partName].total += questions.length;
            allQuestions.push(...questions);
        });
    }

    allQuestions.forEach(q => {
        const partName = questionPartMapping[q.id];
        const ansBtn = document.getElementById(`ans-sheet-btn-${q.id}`);
        const questionBlock = document.getElementById(`q-${q.id}`);
        if (!questionBlock) return;

        const options = questionBlock.querySelectorAll('.option-btn');
        const resultMessage = questionBlock.querySelector('.result-message');
        const correctAnswer = q.answer;

        // Vô hiệu hóa tất cả các nút tùy chọn
        options.forEach(option => {
            option.disabled = true;
            // Hiển thị đáp án đúng
            if (option.dataset.option === correctAnswer) {
                option.classList.add('correct');
            }
        });

        if (userAnswers.hasOwnProperty(q.id)) {
            // Xử lý câu hỏi ĐÃ được trả lời
            const userAnswer = userAnswers[q.id];
            
            if (userAnswer === correctAnswer) {
                results[partName].correct++;
                if (ansBtn) ansBtn.classList.add('correct');
            } else {
                // Đánh dấu câu trả lời sai của người dùng
                const selectedButton = questionBlock.querySelector(`.option-btn[data-option="${userAnswer}"]`);
                if(selectedButton) selectedButton.classList.add('incorrect');
                
                // Hiển thị thông báo đáp án đúng
                resultMessage.innerHTML = `Đáp án đúng là <span class="font-bold">${correctAnswer}</span>.`;
                resultMessage.classList.add('text-red-600');
                if (ansBtn) ansBtn.classList.add('incorrect');
            }
        } else {
            // *** PHẦN ĐƯỢC THÊM VÀO ***
            // Xử lý câu hỏi CHƯA được trả lời
            resultMessage.innerHTML = `Bạn chưa trả lời. Đáp án đúng là <span class="font-bold">${correctAnswer}</span>.`;
            resultMessage.classList.add('text-orange-600'); // Sử dụng màu khác để phân biệt
            if (ansBtn) {
                ansBtn.classList.add('incorrect'); // Đánh dấu là sai trên bảng trả lời
            }
        }
    });
    
    document.querySelectorAll('.flag-btn').forEach(btn => btn.disabled = true);
    
    for (const partName in results) {
        const scoreDisplay = document.querySelector(`#${partName} .part-score-display`);
        if(scoreDisplay) {
             scoreDisplay.innerHTML = `<div class="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-6 rounded-r-lg">
                                               <p class="font-bold">Kết quả ${partName.replace('part', 'Part ')}: ${results[partName].correct} / ${results[partName].total} câu đúng</p>
                                             </div>`;
        }
    }
    
    const listeningCorrect = results.part1.correct + results.part2.correct + results.part3.correct + results.part4.correct;
    const readingCorrect = results.part5.correct + results.part6.correct + results.part7.correct;
    const totalScore = (listeningCorrect + readingCorrect) * 5;

    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = `
        <h2 class="text-3xl font-bold text-blue-700 mb-2">Bảng Tổng Kết Kết Quả</h2>
        <p class="text-xl font-semibold mb-6">Thí sinh: <span class="text-gray-900 font-bold">${testTakerName || 'Không có tên'}</span></p>
        <div class="max-w-md mx-auto text-left bg-gray-50 p-4 rounded-lg shadow-inner">
            <table class="w-full">
                <tbody>
                    <tr class="border-b"><td class="py-2 font-semibold">Listening:</td><td class="py-2 text-right">${listeningCorrect} / 100</td></tr>
                    <tr class="border-b"><td class="py-2 font-semibold">Reading:</td><td class="py-2 text-right">${readingCorrect} / 100</td></tr>
                    <tr class="border-b"><td class="pl-4 py-2">Part 1:</td><td class="py-2 text-right">${results.part1.correct} / ${results.part1.total}</td></tr>
                    <tr class="border-b"><td class="pl-4 py-2">Part 2:</td><td class="py-2 text-right">${results.part2.correct} / ${results.part2.total}</td></tr>
                    <tr class="border-b"><td class="pl-4 py-2">Part 3:</td><td class="py-2 text-right">${results.part3.correct} / ${results.part3.total}</td></tr>
                    <tr class="border-b"><td class="pl-4 py-2">Part 4:</td><td class="py-2 text-right">${results.part4.correct} / ${results.part4.total}</td></tr>
                    <tr class="border-b"><td class="pl-4 py-2">Part 5:</td><td class="py-2 text-right">${results.part5.correct} / ${results.part5.total}</td></tr>
                    <tr class="border-b"><td class="pl-4 py-2">Part 6:</td><td class="py-2 text-right">${results.part6.correct} / ${results.part6.total}</td></tr>
                    <tr class="border-b"><td class="pl-4 py-2">Part 7:</td><td class="py-2 text-right">${results.part7.correct} / ${results.part7.total}</td></tr>
                </tbody>
            </table>
            <div class="mt-6 text-center">
                <p class="text-lg font-semibold">Tổng điểm (ước tính):</p>
                <p class="text-5xl font-bold text-green-600">${totalScore}</p>
            </div>
        </div>
    `;
    resultsContainer.classList.remove('hidden');
    document.getElementById('submit-btn').style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleSubmit() {
    const unansweredCount = totalQuestions - Object.keys(userAnswers).length;
    if (unansweredCount === totalQuestions) {
        showConfirmationModal('Bạn chưa trả lời câu nào. Bạn có chắc chắn muốn nộp bài và nhận 0 điểm không?');
    } else if (unansweredCount > 0) {
        showConfirmationModal(`Bạn còn ${unansweredCount} câu chưa trả lời. Bạn có chắc chắn muốn nộp bài không?`);
    } else {
        showConfirmationModal(`Bạn đã hoàn thành tất cả các câu hỏi. Bạn có muốn nộp bài không?`);
    }
}

// --- Event Listeners ---
document.getElementById('submit-btn').addEventListener('click', handleSubmit);

// Auth Listeners
document.getElementById('show-register').addEventListener('click', (e) => {
    e.preventDefault();
    hideModal(loginModal);
    showModal(registerModal);
});

document.getElementById('show-login').addEventListener('click', (e) => {
    e.preventDefault();
    hideModal(registerModal);
    showModal(loginModal);
});

document.getElementById('register-btn').addEventListener('click', handleRegister);
document.getElementById('login-btn').addEventListener('click', handleLogin);
document.getElementById('logout-btn').addEventListener('click', handleLogout);

document.getElementById('start-test-btn').addEventListener('click', () => {
    hideModal(readyModal);
    mainTestWrapper.style.display = 'block';
    userNameDisplay.textContent = testTakerName;
    userDisplay.classList.remove('hidden');

    startTimer();
    document.getElementById('audio-player').play().catch(e => {
        console.error("Audio autoplay was prevented.", e);
        alert("Trình duyệt đã chặn tự động phát âm thanh. Vui lòng nhấn nút Play trên thanh audio để bắt đầu nghe.");
    });
});

// --- Initial Load ---
window.onload = () => {
    generateQuiz();
    mainTestWrapper.style.display = 'none';
    checkAuth();
};