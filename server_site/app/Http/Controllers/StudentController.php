<?php


namespace App\Http\Controllers;

use App\Models\Student;
use App\Models\Course;
use DB;
use JWTAuth;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Validator;


class StudentController extends Controller
{
    //

    public function store(Request $request)
    {
        // $info = Student::select(

        // "students.id as id",
        // "students.name as name",
        // "students.mobile as mobile",
        // "students.email as email",
        // "courses.course_name as course"
        // )
        // ->join("courses", "students.id", "=", "courses.student_id")
        // // ->where('students.id', 1)
        // ->get();
        // //echo $info;
        // //return response()->json(["courses" => $info]);
        // return $info;

        $info = DB::transaction(
            function () {
                $info = Student::select(

                    "students.id as id",
                    "students.name as name",
                    "students.mobile as mobile",
                    "students.email as email",
                    "courses.course_name as course"
                )
                    ->join("courses", "students.id", "=", "courses.student_id")
                    // ->where('students.id', 1)
                    ->orderBy('students.id')
                    ->get();
                //echo $info;
                //return response()->json(["courses" => $info]);
                return $info;
            }
        );
        return $info;


        // $khkjhjk = Course::find(1)->students()
        // ->where('students.id', 1)
        // ->get(['name']);
        // echo $khkjhjk;
        // $result = Student::with(["courses"])->where("students.id", 1)->get();
        // echo $result;
        // $courses = Student::find(1)->courses;
        //$values = Course::find(1);
        //return response()->json(["courses" => $courses]);
        //echo ($values->students);
        //return response()->json(["courses" => $courses]);
        // foreach ($courses as $course) {
        // echo $course;
        // }
        // foreach (Student::all() as $student) {
        // echo $student->name;
        // }

    }

    public function create(Request $request)
    {

        $name = $request->input('name');



        $email = $request->input('email');
        $mobile = $request->input('mobile');
        $address = $request->input('address');
        $college = $request->input('college');
        $course_name = $request->input('course_name');

        //return $name . $email . $mobile . $address . $college . $course_name;



        $result = \DB::transaction(function () use (&$name, &$email, &$mobile, &$address, &$college, &$course_name) {

            //return $name . $email . $mobile . $address . $college . $course_name;

            $student = new Student;
            $student->name = $name;
            $student->email = $email;
            $student->mobile = $mobile;
            $student->address = $address;
            $student->college = $college;
            $student->save();

            $findStudentID = Student::select('id')->where("mobile", "=", $mobile)->get();
            //return $findStudentID[0]->id;

            $course = new Course;
            $course->student_id = $findStudentID[0]->id;
            $course->course_name = $course_name;
            $course->save();

            return response()->json(["result" => "success"]);
        });
        return $result;
    }


    public function find($id)
    {

        //return $id;
        $info = DB::transaction(
            function () use (&$id) {
                $info = Student::select(

                    "students.id as id",
                    "students.name as name",
                    "students.mobile as mobile",
                    "students.email as email",
                    "courses.course_name as course",
                    "students.address as address",
                    "students.college as college"
                )
                    ->join("courses", "students.id", "=", "courses.student_id")
                    ->where('students.id', $id)
                    // ->orderBy('students.id')
                    ->get();
                //echo $info;
                //return response()->json(["courses" => $info]);
                return $info;
            }
        );
        return $info;
    }


    public function update(Request $request, $id)
    {
        //return $id;
        $name   =      $request->input('name');
        $email =      $request->input('email');
        $mobile =      $request->input('mobile');
        $address =     $request->input('address');
        $college =     $request->input('college');
        $course_name =  $request->input('course_name');

        //return $id . $name . $email . $mobile . $address . $college . $course_name;

        $info = DB::transaction(
            function () use (&$name, &$email, &$mobile, &$address, &$college, &$id, &$course_name) {

                //return $id . $name . $email . $mobile . $address . $college . $course_name;

                // $datas = Student::select("*")->where("id", "=", $id)->get();

                // $datas->$name   =  $name;
                // //return   $datas->$name;
                // $datas->$email = $email;
                // $datas->$mobile = $mobile;
                // $datas->$address = $address;
                // $datas->$college = $college;
                // $datas->save();


                Student::where('id', $id)
                    ->update(['name' => $name, 'email' => $email, 'address' => $address, 'college' => $college, 'mobile' => $mobile]);


                Course::where('student_id', $id)
                    ->update(['course_name' => $course_name]);

                // $demos = Course::select("*")->where("student_id", "=", $id)->get();
                // $demos->course_name = $course_name;
                // $demos->save();

                return response()->json(["result" => "success"]);
            }
        );

        return $info;
    }


    public function delete($id)
    {
        $info = DB::transaction(
            function () use (&$id) {
                //$data = Student::select("*")->where('students.id', '=', $id);
                $result = Student::destroy($id);
                return response()->json(["result" => $result]);
            }
        );
        return $info;
    }
}