package com.cg.onlinegrocery.exception;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
@RestController
public class CustomResponseEntityHandler  extends ResponseEntityExceptionHandler{
	
	@ExceptionHandler
	public ResponseEntity<Object> handlerUserIdException(UserIdException ex,WebRequest request){
		UserIdExceptionResponse userIdExceptionResponse = new UserIdExceptionResponse(ex.getMessage());
				return new ResponseEntity<Object>(userIdExceptionResponse,HttpStatus.BAD_REQUEST);
		
	}
	@ExceptionHandler
	public ResponseEntity<Object> handlerUserNotFoundException(UserNotFoundException exm,WebRequest rq)
	{
		UserNotFoundExceptionResponse userNotFoundExceptionResponse=new UserNotFoundExceptionResponse(exm.getMessage());
		return new ResponseEntity<Object>(userNotFoundExceptionResponse,HttpStatus.BAD_REQUEST);
	}
	

}
