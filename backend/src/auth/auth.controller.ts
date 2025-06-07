import { Body, Controller, Post, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dtos/register.dto';
import { UseGuards, Get, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
  ){}

  @Post('register')
  async register(@Body() registerDto: RegisterDto): Promise<any> {
    return this.authService.register(registerDto);
  }

  @Post('login')
  async login(@Body() body): Promise<any>{
    try {
      const user = await this.authService.validateUser(body.email, body.password);
      // If validation is successful, proceed with login and return success response
      const result = await this.authService.login(user);
      return { success: true, token: result.access_token };
    } catch (error) {
      // Catch errors from validateUser and return a formatted error response
      if (error instanceof HttpException) {
        return { success: false, message: error.message };
      } else {
        // Handle unexpected errors
        return { success: false, message: 'An unexpected error occurred' };
      }
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  getProfile(@Request() req) {
    return req.user;
  }
}
