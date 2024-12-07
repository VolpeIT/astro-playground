export interface RandomUserApi {
  results: Result[];
  info: Info;
}

export interface Result {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: Dob;
  registered: Registered;
  phone: string;
  cell: string;
  id: Id;
  picture: Picture;
  nat: string;
}

export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: Coordinates;
  timezone: Timezone;
}

export interface Street {
  number: number;
  name: string;
}

export interface Coordinates {
  latitude: string;
  longitude: string;
}

export interface Timezone {
  offset: string;
  description: string;
}

export interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export interface Dob {
  date: string;
  age: number;
}

export interface Registered {
  date: string;
  age: number;
}

export interface Id {
  name: string;
  value: string;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}

// EDISON

export interface Course {
  id: number;
  airtableId: string;
  name: string;
  status: string;
  edition: number;
  favorite: boolean;
  published: boolean;
  comingSoon: boolean;
  isValidated: boolean;
  isAsync: boolean;
  courseRid: string;
  crmRid: string;
  emailAirtable: string;
  createdAt: string;
  updatedAt: string;
  urlLanding: string;
  urlCheckout: any;
  urlFramework: any;
  urlVideo: string;
  urlGif: string;
  stock: number;
  generalLearningOutcome: string;
  slackChannelId: any;
  seoTitle: string;
  seoDescription: string;
  previewUrl: any;
  customHeader: any;
  presentationUrl: any;
  rescheduleCause: any;
  rescheduleDetail: any;
  cancelationCause: any;
  cancelationDetail: any;
  editableByInstructor: boolean;
  test: boolean;
  categoryId: number;
  courseConfigId: number;
  academyId: number;
  type: string;
  category: Category;
  subcategories: Subcategory[];
  users: User[];
  events: Event[];
  config: Config;
}

export interface Category {
  id: number;
  value: string;
  htmlColor: string;
  academyId: number;
  visible: boolean;
}

export interface Subcategory {
  courseId: number;
  subcategoryId: number;
  subcategory: Subcategory2;
}

export interface Subcategory2 {
  id: number;
  value: string;
  htmlColor: string;
  categoryId: number;
}

export interface User {
  userId: number;
  courseId: number;
  isInstructor: boolean;
  isCoach: boolean;
  isPropietario: boolean;
  user: User2;
}

export interface User2 {
  id: number;
  email: string;
  name: string;
  country: string;
  linkedin: string;
  signature: string;
  description: string;
  social: string;
  seniority: any;
  area: any;
  phone: string;
  nickname: string;
  expertise: any;
  picture: string;
  jobTitle: string;
  company: string;
  companyLogo: string;
  createdAt: string;
  updatedAt: string;
  active: boolean;
  instructorRid: string;
  lastTimeOnline: string;
}

export interface Event {
  id: number;
  goal: string;
  startTime: string;
  finishTime: string;
  timeZone: string;
  duration: number;
  day: number;
  description: any;
  detail: any;
  courseId: number;
  calendarId: string;
  calendarURL: string;
  meetURL: string;
  recordingURL: any;
  headerDesktopURL: any;
  headerMobileURL: any;
  landingURL: any;
  presentationURL: any;
  featured: boolean;
  order: number;
  categoryId: any;
  eventType: string;
  status: any;
}

export interface Config {
  id: number;
  courseId: number;
  favorite: boolean;
  published: boolean;
  comingSoon: boolean;
  isValidated: boolean;
  isAsync: boolean;
  isPlatformEnabled: boolean;
  editableByInstructor: boolean;
  test: boolean;
  abTesting: boolean;
  abTestingUrl: string;
  stock: number;
  createdAt: string;
  updatedAt: any;
}

// EDISON 2

// export interface AdaptedCourse {
//   href: string;
//   startTime: string;
//   color: string;
//   pill: string;
//   pics: string[];
//   usersNames: string;
//   usersJobs: string;
//   comingSoon: boolean;
//   name: string;
// }
