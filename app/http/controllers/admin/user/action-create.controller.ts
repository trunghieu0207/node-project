import { BaseController } from '../../BaseController';
import { User, UserProfileEntity } from '@app/entity';
import * as bcrypt from 'bcrypt';
import { adminCreateUser } from '@http/services';

export class ActionCreateController extends BaseController {
    public async store() {
        const body = this.request.body;
        const userEntity = await this.buildUserEntity(body);
        const userProfileEntity = this.buildUserProfileEntity(body);

        try {
            await adminCreateUser({
                userEntity: userEntity,
                userProfileEntity: userProfileEntity
            });
            this.response.flash('success', 'this is info flash message');
            return this.response.redirect('/admin/user/test');
        } catch (e) {
            this.response.flash('success', 'this is info flash message');
            return this.response.redirect('/admin/user/test');
        }
    }

    private async buildUserEntity(body: any) {
        const username = body.username;
        const password = await bcrypt.hash(body.password, 16);
        const role = 1;
        return new User(username, password, role);
    }

    private buildUserProfileEntity(body: any) {
        const firstName = body.firstName;
        const lastName = body.lastName;
        const phone = body.phone;
        const email = body.email;
        const gender = body.gender;
        const dateOfBirth = body.DoB;
        return new UserProfileEntity(
            firstName,
            lastName,
            phone,
            email,
            gender,
            dateOfBirth
        );
    }
}
