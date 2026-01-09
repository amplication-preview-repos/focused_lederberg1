import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SchoolList } from "./school/SchoolList";
import { SchoolCreate } from "./school/SchoolCreate";
import { SchoolEdit } from "./school/SchoolEdit";
import { SchoolShow } from "./school/SchoolShow";
import { StudentProfileList } from "./studentProfile/StudentProfileList";
import { StudentProfileCreate } from "./studentProfile/StudentProfileCreate";
import { StudentProfileEdit } from "./studentProfile/StudentProfileEdit";
import { StudentProfileShow } from "./studentProfile/StudentProfileShow";
import { ClassModelList } from "./classModel/ClassModelList";
import { ClassModelCreate } from "./classModel/ClassModelCreate";
import { ClassModelEdit } from "./classModel/ClassModelEdit";
import { ClassModelShow } from "./classModel/ClassModelShow";
import { MessageList } from "./message/MessageList";
import { MessageCreate } from "./message/MessageCreate";
import { MessageEdit } from "./message/MessageEdit";
import { MessageShow } from "./message/MessageShow";
import { FeeStructureList } from "./feeStructure/FeeStructureList";
import { FeeStructureCreate } from "./feeStructure/FeeStructureCreate";
import { FeeStructureEdit } from "./feeStructure/FeeStructureEdit";
import { FeeStructureShow } from "./feeStructure/FeeStructureShow";
import { TransactionList } from "./transaction/TransactionList";
import { TransactionCreate } from "./transaction/TransactionCreate";
import { TransactionEdit } from "./transaction/TransactionEdit";
import { TransactionShow } from "./transaction/TransactionShow";
import { AnnouncementList } from "./announcement/AnnouncementList";
import { AnnouncementCreate } from "./announcement/AnnouncementCreate";
import { AnnouncementEdit } from "./announcement/AnnouncementEdit";
import { AnnouncementShow } from "./announcement/AnnouncementShow";
import { TeacherProfileList } from "./teacherProfile/TeacherProfileList";
import { TeacherProfileCreate } from "./teacherProfile/TeacherProfileCreate";
import { TeacherProfileEdit } from "./teacherProfile/TeacherProfileEdit";
import { TeacherProfileShow } from "./teacherProfile/TeacherProfileShow";
import { GradeList } from "./grade/GradeList";
import { GradeCreate } from "./grade/GradeCreate";
import { GradeEdit } from "./grade/GradeEdit";
import { GradeShow } from "./grade/GradeShow";
import { ParentProfileList } from "./parentProfile/ParentProfileList";
import { ParentProfileCreate } from "./parentProfile/ParentProfileCreate";
import { ParentProfileEdit } from "./parentProfile/ParentProfileEdit";
import { ParentProfileShow } from "./parentProfile/ParentProfileShow";
import { SubjectList } from "./subject/SubjectList";
import { SubjectCreate } from "./subject/SubjectCreate";
import { SubjectEdit } from "./subject/SubjectEdit";
import { SubjectShow } from "./subject/SubjectShow";
import { AttendanceList } from "./attendance/AttendanceList";
import { AttendanceCreate } from "./attendance/AttendanceCreate";
import { AttendanceEdit } from "./attendance/AttendanceEdit";
import { AttendanceShow } from "./attendance/AttendanceShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"school-management-backend"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="School"
          list={SchoolList}
          edit={SchoolEdit}
          create={SchoolCreate}
          show={SchoolShow}
        />
        <Resource
          name="StudentProfile"
          list={StudentProfileList}
          edit={StudentProfileEdit}
          create={StudentProfileCreate}
          show={StudentProfileShow}
        />
        <Resource
          name="ClassModel"
          list={ClassModelList}
          edit={ClassModelEdit}
          create={ClassModelCreate}
          show={ClassModelShow}
        />
        <Resource
          name="Message"
          list={MessageList}
          edit={MessageEdit}
          create={MessageCreate}
          show={MessageShow}
        />
        <Resource
          name="FeeStructure"
          list={FeeStructureList}
          edit={FeeStructureEdit}
          create={FeeStructureCreate}
          show={FeeStructureShow}
        />
        <Resource
          name="Transaction"
          list={TransactionList}
          edit={TransactionEdit}
          create={TransactionCreate}
          show={TransactionShow}
        />
        <Resource
          name="Announcement"
          list={AnnouncementList}
          edit={AnnouncementEdit}
          create={AnnouncementCreate}
          show={AnnouncementShow}
        />
        <Resource
          name="TeacherProfile"
          list={TeacherProfileList}
          edit={TeacherProfileEdit}
          create={TeacherProfileCreate}
          show={TeacherProfileShow}
        />
        <Resource
          name="Grade"
          list={GradeList}
          edit={GradeEdit}
          create={GradeCreate}
          show={GradeShow}
        />
        <Resource
          name="ParentProfile"
          list={ParentProfileList}
          edit={ParentProfileEdit}
          create={ParentProfileCreate}
          show={ParentProfileShow}
        />
        <Resource
          name="Subject"
          list={SubjectList}
          edit={SubjectEdit}
          create={SubjectCreate}
          show={SubjectShow}
        />
        <Resource
          name="Attendance"
          list={AttendanceList}
          edit={AttendanceEdit}
          create={AttendanceCreate}
          show={AttendanceShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
