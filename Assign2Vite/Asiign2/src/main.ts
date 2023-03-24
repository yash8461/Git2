interface Vacancy {
  id: string;
  title: string;
  description: string;
  qualifications: string[];
}

interface Applicant {
  id: string;
  name: string;
  email: string;
  phone: string;
  qualifications: string[];
  appliedDate: Date;
}

interface Interview {
  id: string;
  applicantId: string;
  scheduledDate: Date;
  interviewer: string;
  status: "Scheduled" | "Completed" | "Cancelled";
  result?: "Selected" | "Rejected";
}

class RecruitmentProcessSystem {
  private vacancies: Vacancy[] = [];
  private applicants: Applicant[] = [];
  private interviews: Interview[] = [];

  // Create a vacancy
  createVacancy(vacancy: Vacancy) {
    this.vacancies.push(vacancy);
  }

  // Get all vacancies
  getVacancies() {
    return this.vacancies;
  }

  // Get a vacancy by ID
  getVacancyById(id: string) {
    return this.vacancies.find(vacancy => vacancy.id === id);
  }

  // Create an applicant
  createApplicant(applicant: Applicant) {
    this.applicants.push(applicant);
  }

  // Get all applicants
  getApplicants() {
    return this.applicants;
  }

  // Get an applicant by ID
  getApplicantById(id: string) {
    return this.applicants.find(applicant => applicant.id === id);
  }

  // Schedule an interview
  scheduleInterview(interview: Interview) {
    this.interviews.push(interview);
  }

  // Get all interviews
  getInterviews() {
    return this.interviews;
  }

  // Get an interview by ID
  getInterviewById(id: string) {
    return this.interviews.find(interview => interview.id === id);
  }

  // Update an interview result
  updateInterviewResult(interviewId: string, result: "Selected" | "Rejected") {
    const interview = this.interviews.find(interview => interview.id === interviewId);
    if (interview) {
      interview.result = result;
    }
  }

  // Generate a report of all applicants with their interview results
  generateApplicantsReport() {
    const applicantsReport = this.applicants.map(applicant => {
      const interview = this.interviews.find(interview => interview.applicantId === applicant.id);
      return {
        id: applicant.id,
        name: applicant.name,
        email: applicant.email,
        phone: applicant.phone,
        qualifications: applicant.qualifications,
        appliedDate: applicant.appliedDate,
        interviewStatus: interview ? interview.status : "Not Scheduled",
        interviewResult: interview ? interview.result : undefined
      };
    });
    return applicantsReport;
  }
}
