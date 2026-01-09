import { Module } from "@nestjs/common";
import { SchoolModule } from "./school/school.module";
import { StudentProfileModule } from "./studentProfile/studentProfile.module";
import { ClassModelModule } from "./classModel/classModel.module";
import { MessageModule } from "./message/message.module";
import { FeeStructureModule } from "./feeStructure/feeStructure.module";
import { TransactionModule } from "./transaction/transaction.module";
import { AnnouncementModule } from "./announcement/announcement.module";
import { TeacherProfileModule } from "./teacherProfile/teacherProfile.module";
import { GradeModule } from "./grade/grade.module";
import { ParentProfileModule } from "./parentProfile/parentProfile.module";
import { SubjectModule } from "./subject/subject.module";
import { AttendanceModule } from "./attendance/attendance.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    SchoolModule,
    StudentProfileModule,
    ClassModelModule,
    MessageModule,
    FeeStructureModule,
    TransactionModule,
    AnnouncementModule,
    TeacherProfileModule,
    GradeModule,
    ParentProfileModule,
    SubjectModule,
    AttendanceModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
